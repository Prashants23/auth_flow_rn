import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import { AuthStackParamList } from '../navigation/AppNavigator';
import { useAuthAnimation } from '../hooks/useAuthAnimation';
import { useAuthForm } from '../hooks/useAuthForm';
import { validateEmail, validatePassword, validateName } from '../utils/validation';
import { AuthInput, AuthButton, AuthHeader, AuthScreenLayout } from '../components';
import { colors, spacing, typography } from '../constants/theme';

type SignupScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Signup'>;

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<SignupScreenNavigationProp>();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  
  // Animation hook
  const { fadeAnim, translateX, animateOut } = useAuthAnimation({ slideDirection: 'left' });
  
  // Form handling hook
  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useAuthForm({
    initialValues: { name: '', email: '', password: '' },
    validationRules: {
      name: validateName,
      email: validateEmail,
      password: validatePassword,
    },
    onSubmit: async (formValues) => {
      return await signup(formValues.name, formValues.email, formValues.password);
    },
  });

  const navigateToLogin = () => {
    animateOut(() => {
      navigation.navigate('Login');
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const headerContent = (
    <AuthHeader
      iconName="person-add-outline"
      iconSize={80}
      title="Create Account"
      subtitle="Sign up to get started"
    />
  );

  return (
    <AuthScreenLayout
      headerContent={headerContent}
      fadeAnim={fadeAnim}
      translateX={translateX}
    >
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>
      
      <AuthInput
        icon="person-outline"
        placeholder="Full Name"
        value={values.name}
        onChangeText={(text) => handleChange('name', text)}
        error={errors.name}
        autoCapitalize="words"
        autoCorrect={false}
      />

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
        title="Create Account"
        onPress={handleSubmit}
        loading={loading}
      />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.loginLink}>Sign In</Text>
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
  loginText: {
    fontSize: typography.sizes.sm,
    color: colors.secondaryText,
  },
  loginLink: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    fontWeight: typography.weights.semibold,
  },
});

export default SignupScreen;
