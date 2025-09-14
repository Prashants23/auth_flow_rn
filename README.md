# 🔐 React Native Authentication App

A complete **React Native authentication app** with modern dark theme UI, smooth animations, and robust authentication flow built using **React Context API**, **AsyncStorage** for persistence, and **TypeScript** for type safety.

![React Native](https://img.shields.io/badge/React%20Native-0.81.4-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Demo

https://github.com/user-attachments/assets/6fe4f0c0-b7b1-4725-8327-82fb0e2bd3e4

## ✨ Features

### 🎯 **Core Authentication**
- ✅ **User Registration** - Complete signup flow with validation
- ✅ **User Login** - Secure login with email/password
- ✅ **Session Management** - Persistent login state with AsyncStorage
- ✅ **Form Validation** - Real-time validation with error feedback
- ✅ **Password Security** - Password visibility toggle with eye icon
- ✅ **Auto-logout** - Logout functionality with confirmation dialog

### 🎨 **Modern UI/UX**
- ✅ **Dark Theme** - Professional dark mode design
- ✅ **Smooth Animations** - Coordinated horizontal slide transitions
- ✅ **Green Accent Theme** - Consistent #89eb43 accent color throughout
- ✅ **Responsive Design** - Works beautifully on all screen sizes
- ✅ **Vector Icons** - Beautiful Ionicons integration
- ✅ **Card-based Layout** - Modern card design with shadows

### 🚀 **Advanced Features**  
- ✅ **TypeScript** - Full type safety throughout the app
- ✅ **Context API** - Global state management for authentication
- ✅ **React Navigation** - Smooth screen transitions
- ✅ **AsyncStorage** - Persistent authentication state
- ✅ **Form Management** - Custom hooks for form handling
- ✅ **Animation System** - Custom animation hooks
- ✅ **Modular Architecture** - Reusable components and utilities

### 🏗️ **Code Quality**
- ✅ **Modular Components** - Reusable UI components
- ✅ **Custom Hooks** - Shared logic encapsulation
- ✅ **Design System** - Centralized theme and styling
- ✅ **Validation Utils** - Reusable validation functions
- ✅ **TypeScript Coverage** - 100% type safety
- ✅ **Clean Architecture** - Separation of concerns

## 📱 Screenshots

### Login Screen
- Dark theme with green accent colors
- Email and password input with validation
- Password visibility toggle
- Smooth horizontal animations
- "Forgot password?" functionality
- Navigation to signup

### Signup Screen  
- Consistent dark theme design
- Name, email, and password input fields
- Real-time form validation
- Auto-login after successful signup
- Smooth transition animations

### Home Screen
- User dashboard with profile display
- Green accent avatar and status indicators
- Account status and member information
- Quick action cards
- Logout functionality with confirmation

## 🛠️ Technology Stack

### **Core Technologies**
- **React Native**: 0.81.4
- **React**: 19.1.0  
- **TypeScript**: 5.8.3
- **React Navigation**: Stack navigation with custom transitions
- **AsyncStorage**: Data persistence
- **React Context API**: Global state management

### **UI & Design**
- **React Native Vector Icons**: Ionicons for beautiful icons
- **Custom Animation System**: Smooth transitions and micro-interactions
- **Design System**: Centralized theme with colors, spacing, and typography
- **Dark Theme**: Professional dark mode throughout

### **Development Tools**
- **ESLint**: Code linting and formatting
- **Metro**: React Native bundler
- **Flipper**: Debugging and development
- **TypeScript**: Static type checking

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### **Required**
- **Node.js**: 18.20.8+ (20+ recommended)
- **npm** or **yarn**: Latest version
- **React Native CLI**: `npm install -g react-native-cli`

### **For iOS Development**
- **macOS**: Required for iOS development
- **Xcode**: 16.1+ (currently supports 15.4 with warnings)
- **iOS Simulator**: Included with Xcode
- **CocoaPods**: `gem install cocoapods`

### **For Android Development**
- **Android Studio**: Latest version
- **Android SDK**: API level 30+
- **Android Virtual Device (AVD)**: For testing
- **Java Development Kit (JDK)**: 11+

## 🚀 Installation & Setup

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd auth
```

### **2. Install Dependencies**
```bash
# Install npm dependencies
npm install

# For iOS (macOS only)
cd ios && pod install && cd ..
```

### **3. Start Metro Bundler**
```bash
npm start
```

### **4. Run the App**

**Android:**
```bash
npm run android
```

**iOS:** (macOS only)
```bash
npm run ios
```

## 🧪 Testing the App

### **Demo Authentication**
The app includes built-in demo functionality for easy testing:

1. **Create New Account**
   - Use the signup form with any valid information
   - Password must be 6+ characters
   - Account will be created and you'll be auto-logged in

2. **Demo Login Credentials**
   - For any account you create, you can login with:
     - **Your original password** (recommended)
     - **Email prefix**: Part before @ symbol (e.g., for `user@example.com`, password is `user`)
     - **Universal fallback**: Simply `password`

### **Test Scenarios**

**Authentication Flow:**
- ✅ Valid signup with all required fields
- ✅ Email format validation
- ✅ Password length validation (6+ chars)
- ✅ Duplicate email prevention
- ✅ Login with valid credentials
- ✅ Login error handling
- ✅ Logout functionality
- ✅ Persistent login across app restarts

**UI/UX Testing:**
- ✅ Smooth animations between screens
- ✅ Password visibility toggle
- ✅ Form validation feedback
- ✅ Loading states during authentication
- ✅ Responsive design on different screen sizes

## 🏗️ Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── AuthButton.tsx      # Standardized button component
│   ├── AuthHeader.tsx      # Header with icon and text
│   ├── AuthInput.tsx       # Input field with validation
│   ├── AuthScreenLayout.tsx # Common screen layout wrapper
│   └── index.ts            # Component exports
├── constants/              # App constants
│   └── theme.ts           # Design system (colors, spacing, typography)
├── context/               # React Context providers
│   └── AuthContext.tsx    # Authentication state management
├── hooks/                 # Custom React hooks  
│   ├── useAuthAnimation.ts # Animation logic
│   ├── useAuthForm.ts     # Form handling logic
│   └── index.ts           # Hook exports
├── navigation/            # Navigation configuration
│   └── AppNavigator.tsx   # Stack navigator setup
├── screens/               # Screen components
│   ├── HomeScreen.tsx     # User dashboard
│   ├── LoginScreen.tsx    # Login form
│   └── SignupScreen.tsx   # Registration form
├── utils/                 # Utility functions
│   ├── validation.ts      # Form validation utilities
│   └── index.ts          # Utility exports
└── types/                # TypeScript type definitions
    └── react-native-vector-icons.d.ts
```

## 🎨 Design System

### **Color Palette**
```typescript
colors = {
  background: '#000000',      // Main background
  cardBackground: '#1a1a1a',  // Card backgrounds
  inputBackground: '#2a2a2a', // Input field backgrounds
  primary: '#89eb43',         // Green accent color
  primaryText: '#ffffff',     // Main text color
  secondaryText: '#999999',   // Secondary text
  errorText: '#ff4757',       // Error messages
}
```

### **Spacing System**
```typescript
spacing = {
  xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24, xxxl: 30
}
```

### **Typography Scale**
```typescript
typography = {
  sizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 24, xxl: 28 },
  weights: { regular: '400', medium: '500', semibold: '600', bold: '700' }
}
```

## 🚀 Architecture Overview

### **Authentication Flow**
```typescript
AuthContext → useAuth() → { user, login, signup, logout }
├── Login/Signup Forms
├── Validation & Error Handling  
├── AsyncStorage Persistence
└── Navigation State Management
```

### **Component Architecture**
```typescript
Screen Components
├── Custom Hooks (useAuthForm, useAuthAnimation)
├── Reusable Components (AuthInput, AuthButton)
├── Utilities (validation, theme)
└── Context (AuthContext)
```

### **State Management**
- **Global State**: React Context API for authentication
- **Local State**: React hooks for form data and UI state
- **Persistence**: AsyncStorage for login sessions
- **Validation**: Real-time form validation with error states

## 🔧 Configuration

### **Environment Variables**
Create a `.env` file for environment-specific configurations:
```env
# API Configuration (if connecting to backend)
API_BASE_URL=https://your-api.com
API_TIMEOUT=10000

# App Configuration
APP_NAME=Auth App
VERSION=1.0.0
```

### **Custom Theme**
Modify `src/constants/theme.ts` to customize colors and styling:
```typescript
export const colors = {
  primary: '#your-color',      // Change accent color
  background: '#your-bg',      // Change background
  // ... other colors
}
```

## 🧪 Testing

### **Running Tests**
```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### **Test Structure**
```
__tests__/
├── components/          # Component tests
├── hooks/              # Hook tests  
├── utils/              # Utility tests
└── screens/            # Integration tests
```

## 📦 Building for Production

### **Android APK**
```bash
cd android
./gradlew assembleRelease
```

### **iOS Archive** (macOS only)
```bash
cd ios
xcodebuild -workspace auth.xcworkspace -scheme auth archive
```

### **Optimization Tips**
- Enable Hermes for better performance
- Optimize bundle size with Metro bundler
- Use Flipper for debugging and profiling
- Implement proper error boundaries
- Add crash reporting (Crashlytics)

## 🔍 Troubleshooting

### **Common Issues**

**1. Metro Bundler Issues**
```bash
npx react-native start --reset-cache
```

**2. iOS Build Failures**
- Ensure Xcode 16.1+ (currently supporting 15.4 with warnings)
- Clean build folder: `cd ios && rm -rf build && cd ..`
- Reinstall pods: `cd ios && pod install && cd ..`

**3. Android Build Issues**  
```bash
cd android && ./gradlew clean && cd ..
npx react-native run-android
```

**4. Vector Icons Not Showing**
- Ensure fonts are properly linked
- Check `android/app/build.gradle` includes font gradle script
- Verify `ios/auth/Info.plist` includes UIAppFonts array

**5. AsyncStorage Issues**
```bash
# Clear AsyncStorage in development
npx react-native run-android --reset-cache
```

### **Performance Issues**
- Enable Hermes engine for better JavaScript performance
- Use `useCallback` and `useMemo` for expensive operations  
- Implement lazy loading for large screens
- Optimize image sizes and formats

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow code style**: Use ESLint and Prettier configurations
4. **Add tests**: Write tests for new functionality
5. **Commit changes**: `git commit -m 'Add amazing feature'`
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Create Pull Request**

### **Code Standards**
- **TypeScript**: All new code must be typed
- **Component Structure**: Follow established patterns
- **Testing**: Add tests for new components/hooks
- **Documentation**: Update README for new features

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Native Community** - For excellent documentation and tools
- **React Navigation** - For smooth navigation experience
- **Ionicons** - For beautiful icon set  
- **AsyncStorage** - For reliable data persistence
- **TypeScript** - For enhanced development experience

## 📞 Support

For support and questions:
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check this README and inline comments

---

**🎉 Your React Native Authentication App is ready for production!** 

Built with ❤️ using React Native, TypeScript, and modern development practices.
