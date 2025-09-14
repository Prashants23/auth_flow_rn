import { useState, useCallback } from 'react';
import { validateForm, ValidationResult } from '../utils/validation';

interface UseAuthFormProps<T> {
  initialValues: T;
  validationRules: Record<keyof T, (value: string) => ValidationResult>;
  onSubmit: (values: T) => Promise<{ success: boolean; error?: string }>;
}

interface UseAuthFormReturn<T> {
  values: T;
  errors: Record<keyof T, string>;
  loading: boolean;
  handleChange: (field: keyof T, value: string) => void;
  handleSubmit: () => Promise<void>;
  clearErrors: () => void;
}

export const useAuthForm = <T extends Record<string, string>>({
  initialValues,
  validationRules,
  onSubmit,
}: UseAuthFormProps<T>): UseAuthFormReturn<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((field: keyof T, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  const clearErrors = useCallback(() => {
    setErrors({} as Record<keyof T, string>);
  }, []);

  const handleSubmit = useCallback(async () => {
    // Validate form
    const validationErrors = validateForm(
      values as Record<string, string>,
      validationRules as Record<string, (value: string) => ValidationResult>
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as Record<keyof T, string>);
      return;
    }

    setLoading(true);
    setErrors({} as Record<keyof T, string>);

    try {
      const result = await onSubmit(values);
      
      if (!result.success && result.error) {
        // Try to map error to specific fields
        const errorMessage = result.error.toLowerCase();
        const newErrors = {} as Record<keyof T, string>;
        
        if (errorMessage.includes('email')) {
          newErrors['email' as keyof T] = result.error;
        } else if (errorMessage.includes('password')) {
          newErrors['password' as keyof T] = result.error;
        } else if (errorMessage.includes('name')) {
          newErrors['name' as keyof T] = result.error;
        } else {
          // Generic error - could be displayed differently
          console.error('Form submission error:', result.error);
        }
        
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  }, [values, validationRules, onSubmit]);

  return {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
    clearErrors,
  };
};
