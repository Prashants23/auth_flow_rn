import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../context/AuthContext';

const HomeScreen: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: logout,
          style: 'destructive',
        },
      ]
    );
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome Back!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="log-out-outline" size={24} color="#dc3545" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{getInitials(user?.name || 'U')}</Text>
          </View>
          
          <View style={styles.userInfo}>
            <Text style={styles.welcomeText}>Hello,</Text>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Icon name="checkmark-circle-outline" size={32} color="#28a745" />
            <Text style={styles.statTitle}>Account Status</Text>
            <Text style={styles.statValue}>Active</Text>
          </View>

          <View style={styles.statCard}>
            <Icon name="time-outline" size={32} color="#007bff" />
            <Text style={styles.statTitle}>Member Since</Text>
            <Text style={styles.statValue}>Today</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionCard}>
            <Icon name="person-outline" size={24} color="#007bff" />
            <Text style={styles.actionTitle}>Edit Profile</Text>
            <Text style={styles.actionSubtitle}>Update your information</Text>
            <Icon name="chevron-forward" size={20} color="#6c757d" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Icon name="settings-outline" size={24} color="#007bff" />
            <Text style={styles.actionTitle}>Settings</Text>
            <Text style={styles.actionSubtitle}>Manage your preferences</Text>
            <Icon name="chevron-forward" size={20} color="#6c757d" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard}>
            <Icon name="help-circle-outline" size={24} color="#007bff" />
            <Text style={styles.actionTitle}>Help & Support</Text>
            <Text style={styles.actionSubtitle}>Get help when you need it</Text>
            <Icon name="chevron-forward" size={20} color="#6c757d" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButtonLarge} onPress={handleLogout}>
          <Icon name="log-out-outline" size={24} color="#ffffff" />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoutButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  profileSection: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00ff88',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  userInfo: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: '#999999',
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  statTitle: {
    fontSize: 12,
    color: '#999999',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  actionsContainer: {
    marginBottom: 24,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  actionTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 12,
  },
  actionSubtitle: {
    flex: 2,
    fontSize: 14,
    color: '#999999',
    marginLeft: 8,
  },
  logoutButtonLarge: {
    flexDirection: 'row',
    backgroundColor: '#ff4757',
    borderRadius: 16,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default HomeScreen;
