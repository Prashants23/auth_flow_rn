import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, spacing, typography, borderRadius } from '../constants/theme';

interface AuthInputProps extends Omit<TextInputProps, 'style'> {
  icon: string;
  error?: string;
  showPasswordToggle?: boolean;
  isPasswordVisible?: boolean;
  onPasswordToggle?: () => void;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  icon,
  error,
  showPasswordToggle = false,
  isPasswordVisible = false,
  onPasswordToggle,
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, error && styles.inputError]}>
        <Icon name={icon} size={20} color="white" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.placeholderText}
          {...textInputProps}
        />
        {showPasswordToggle && (
          <TouchableOpacity style={styles.eyeIcon} onPress={onPasswordToggle}>
            <Icon
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.lg,
    height: 55,
    borderWidth: 1,
    borderColor: colors.transparent,
  },
  inputError: {
    borderColor: colors.errorText,
  },
  inputIcon: {
    marginRight: spacing.md,
  },
  input: {
    flex: 1,
    fontSize: typography.sizes.sm,
    color: colors.primaryText,
  },
  eyeIcon: {
    padding: spacing.xs,
  },
  errorText: {
    fontSize: typography.sizes.xs,
    color: colors.errorText,
    marginTop: spacing.sm,
    marginLeft: spacing.xs,
  },
});
