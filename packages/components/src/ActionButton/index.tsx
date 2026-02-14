// packages/components/src/ActionButton/index.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../ThemeProvider';

interface ActionButtonProps {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress, disabled = false }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={{
        backgroundColor: disabled
          ? theme.colors.action.backgroundDisabled
          : theme.colors.action.background,
        paddingVertical: theme.spacing.sm,
        paddingHorizontal: theme.spacing.lg,
        borderRadius: theme.borderRadius.button,
        borderWidth: theme.borderWidth.button,
        borderColor: theme.colors.action.border,
        alignItems: 'center',
      }}
    >
      <Text style={{
        color: theme.colors.action.text,
        fontSize: theme.typography.body.fontSize,
        fontFamily: theme.typography.body.fontFamily,
      }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
