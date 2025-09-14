import React, { ReactNode } from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Animated } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../constants/theme';

interface AuthScreenLayoutProps {
  children: ReactNode;
  headerContent: ReactNode;
  fadeAnim: Animated.Value;
  translateX: Animated.AnimatedInterpolation;
}

export const AuthScreenLayout: React.FC<AuthScreenLayoutProps> = ({
  children,
  headerContent,
  fadeAnim,
  translateX,
}) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View 
            style={[
              styles.headerContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateX }],
              }
            ]}
          >
            {headerContent}
          </Animated.View>

          <Animated.View 
            style={[
              styles.formContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateX }],
              }
            ]}
          >
            {children}
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.xxl,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  formContainer: {
    backgroundColor: colors.cardBackground,
    borderRadius: borderRadius.xl,
    padding: spacing.xxxl,
    ...shadows.large,
  },
});
