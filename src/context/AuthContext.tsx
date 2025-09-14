import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // For demo purposes only
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users storage
const MOCK_USERS_KEY = '@mock_users';
const AUTH_USER_KEY = '@auth_user';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from AsyncStorage
  useEffect(() => {
    loadAuthState();
  }, []);

  const loadAuthState = async () => {
    try {
      const savedUser = await AsyncStorage.getItem(AUTH_USER_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Error loading auth state:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveAuthState = async (userData: User | null) => {
    try {
      if (userData) {
        await AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(userData));
      } else {
        await AsyncStorage.removeItem(AUTH_USER_KEY);
      }
    } catch (error) {
      console.error('Error saving auth state:', error);
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // Validate email format
      if (!validateEmail(email)) {
        return { success: false, error: 'Invalid email format' };
      }

      if (!password) {
        return { success: false, error: 'Password is required' };
      }

      // Get stored users
      const storedUsersData = await AsyncStorage.getItem(MOCK_USERS_KEY);
      const storedUsers: User[] = storedUsersData ? JSON.parse(storedUsersData) : [];

      // Find user with matching email and password (in real app, password would be hashed)
      const foundUser = storedUsers.find(
        u => u.email.toLowerCase() === email.toLowerCase()
      );

      if (!foundUser) {
        return { success: false, error: 'User not found' };
      }

     
      const isValidPassword = 
        (foundUser.password && password === foundUser.password) ||  // Stored password
        password === foundUser.email.split('@')[0] ||              // Email prefix
        password === 'password';                                   // Default fallback
      
      if (!isValidPassword) {
        return { success: false, error: 'Incorrect password' };
      }

      setUser(foundUser);
      await saveAuthState(foundUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // Validate inputs
      if (!name.trim()) {
        return { success: false, error: 'Name is required' };
      }

      if (!validateEmail(email)) {
        return { success: false, error: 'Invalid email format' };
      }

      if (password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters' };
      }

      // Get stored users
      const storedUsersData = await AsyncStorage.getItem(MOCK_USERS_KEY);
      const storedUsers: User[] = storedUsersData ? JSON.parse(storedUsersData) : [];

      // Check if user already exists
      const existingUser = storedUsers.find(
        u => u.email.toLowerCase() === email.toLowerCase()
      );

      if (existingUser) {
        return { success: false, error: 'User with this email already exists' };
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.toLowerCase(),
        password: password, // Store password for demo (never do this in production!)
      };

      // Save to mock storage
      storedUsers.push(newUser);
      await AsyncStorage.setItem(MOCK_USERS_KEY, JSON.stringify(storedUsers));

      // Auto login the user
      setUser(newUser);
      await saveAuthState(newUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Signup failed. Please try again.' };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setUser(null);
      await saveAuthState(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
