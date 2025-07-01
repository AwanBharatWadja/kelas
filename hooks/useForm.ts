import { useState, useCallback } from 'react';

export interface FormField {
  value: string;
  error?: string;
  touched?: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export interface UseFormOptions {
  initialValues: Record<string, string>;
  validationRules?: Record<string, (value: string) => string | undefined>;
  onSubmit?: (values: Record<string, string>) => Promise<void> | void;
}

export interface UseFormReturn {
  values: Record<string, string>;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (name: string, value: string) => void;
  handleBlur: (name: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
  setFieldError: (name: string, error: string) => void;
}

export function useForm({
  initialValues,
  validationRules = {},
  onSubmit
}: UseFormOptions): UseFormReturn {
  const [formState, setFormState] = useState<FormState>(() => {
    const state: FormState = {};
    Object.keys(initialValues).forEach(key => {
      state[key] = {
        value: initialValues[key],
        error: undefined,
        touched: false
      };
    });
    return state;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name: string, value: string): string | undefined => {
    const rule = validationRules[name];
    return rule ? rule(value) : undefined;
  }, [validationRules]);

  const handleChange = useCallback((name: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: validateField(name, value)
      }
    }));
  }, [validateField]);

  const handleBlur = useCallback((name: string) => {
    setFormState(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true
      }
    }));
  }, []);

  const setFieldError = useCallback((name: string, error: string) => {
    setFormState(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        error
      }
    }));
  }, []);

  const reset = useCallback(() => {
    const state: FormState = {};
    Object.keys(initialValues).forEach(key => {
      state[key] = {
        value: initialValues[key],
        error: undefined,
        touched: false
      };
    });
    setFormState(state);
    setIsSubmitting(false);
  }, [initialValues]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newState = { ...formState };
    let hasErrors = false;

    Object.keys(newState).forEach(key => {
      const error = validateField(key, newState[key].value);
      newState[key] = {
        ...newState[key],
        error,
        touched: true
      };
      if (error) hasErrors = true;
    });

    setFormState(newState);

    if (hasErrors || !onSubmit) return;

    setIsSubmitting(true);
    try {
      const values: Record<string, string> = {};
      Object.keys(formState).forEach(key => {
        values[key] = formState[key].value;
      });
      await onSubmit(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formState, validateField, onSubmit]);

  const values = Object.keys(formState).reduce((acc, key) => {
    acc[key] = formState[key].value;
    return acc;
  }, {} as Record<string, string>);

  const errors = Object.keys(formState).reduce((acc, key) => {
    acc[key] = formState[key].error;
    return acc;
  }, {} as Record<string, string | undefined>);

  const touched = Object.keys(formState).reduce((acc, key) => {
    acc[key] = formState[key].touched || false;
    return acc;
  }, {} as Record<string, boolean>);

  const isValid = Object.values(formState).every(field => !field.error);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldError
  };
}