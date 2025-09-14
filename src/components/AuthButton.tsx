import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../constants/theme';

interface AuthButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  title,
  loading = false,
  variant = 'primary',
  style,
  disabled,
  ...touchableProps
}) => {
  const isDisabled = disabled || loading;
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        isDisabled && styles.disabledButton,
        style,
      ]}
      disabled={isDisabled}
      {...touchableProps}
    >
      {loading ? (
        <ActivityIndicator size="small" color={variant === 'primary' ? '#000000' : colors.primary} />
      ) : (
        <Text style={[
          styles.buttonText,
          variant === 'primary' ? styles.primaryButtonText : styles.secondaryButtonText,
        ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: borderRadius.md,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  disabledButton: {
    backgroundColor: '#444444',
    borderColor: '#444444',
  },
  buttonText: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
  },
  primaryButtonText: {
    color: '#000000',
  },
  secondaryButtonText: {
    color: colors.primary,
  },
});
