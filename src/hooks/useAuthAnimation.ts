import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

interface UseAuthAnimationReturn {
  slideAnim: Animated.Value;
  fadeAnim: Animated.Value;
  translateX: Animated.AnimatedInterpolation;
  animateOut: (callback: () => void) => void;
}

interface UseAuthAnimationProps {
  slideDirection: 'left' | 'right'; // Direction to slide in from
}

export const useAuthAnimation = ({ slideDirection }: UseAuthAnimationProps): UseAuthAnimationReturn => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Determine slide direction
  const slideOffset = slideDirection === 'right' ? 50 : -50;

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [slideOffset, 0],
  });

  useEffect(() => {
    // Reset animation values
    slideAnim.setValue(0);
    fadeAnim.setValue(0);
    
    // Animate in
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, fadeAnim]);

  const animateOut = (callback: () => void) => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  return {
    slideAnim,
    fadeAnim,
    translateX,
    animateOut,
  };
};
