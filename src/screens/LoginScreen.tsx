import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import { AuthStackParamList } from '../navigation/AppNavigator';
import { useAuthAnimation } from '../hooks/useAuthAnimation';
import { useAuthForm } from '../hooks/useAuthForm';
import { validateEmail, validatePassword } from '../utils/validation';
import { AuthInput, AuthButton, AuthHeader, AuthScreenLayout } from '../components';
import { colors, spacing, typography } from '../constants/theme';

type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  
  // Animation hook
  const { fadeAnim, translateX, animateOut } = useAuthAnimation({ slideDirection: 'right' });
  
  // Form handling hook
  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useAuthForm({
    initialValues: { email: '', password: '' },
    validationRules: {
      email: validateEmail,
      password: validatePassword,
    },
    onSubmit: async (formValues) => {
      return await login(formValues.email, formValues.password);
    },
  });

  const navigateToSignup = () => {
    animateOut(() => {
      navigation.navigate('Signup');
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const headerContent = (
    <AuthHeader
      iconName="log-in-outline"
      title="Sign In"
      subtitle="Log in to manage your to the Apps"
    />
  );

  return (
    <AuthScreenLayout
      headerContent={headerContent}
      fadeAnim={fadeAnim}
      translateX={translateX}
    >
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Log in to manage your to the Apps</Text>
      
      <AuthInput
        icon="mail-outline"
        placeholder="Email"
        value={values.email}
        onChangeText={(text) => handleChange('email', text)}
        error={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <AuthInput
        icon="lock-closed-outline"
        placeholder="Password"
        value={values.password}
        onChangeText={(text) => handleChange('password', text)}
        error={errors.password}
        secureTextEntry={!showPassword}
        showPasswordToggle
        isPasswordVisible={showPassword}
        onPasswordToggle={togglePasswordVisibility}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <AuthButton
        title="Sign In"
        onPress={handleSubmit}
        loading={loading}
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </AuthScreenLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.primaryText,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.sizes.xs,
    color: colors.secondaryText,
    textAlign: 'center',
    marginBottom: spacing.xl + spacing.sm,
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  forgotPasswordText: {
    color: 'gray',
    fontSize: typography.sizes.sm,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
  signupText: {
    fontSize: typography.sizes.sm,
    color: colors.secondaryText,
  },
  signupLink: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    fontWeight: typography.weights.semibold,
  },
});

export default LoginScreen;
