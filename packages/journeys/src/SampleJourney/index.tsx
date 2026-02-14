// packages/journeys/src/SampleJourney/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme, ActionButton } from '@dn/components';

export const SampleJourney: React.FC = () => {
  const { theme, brandName, themeName, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.page.background }}>
      <Text style={{
        color: theme.colors.text.default,
        fontSize: theme.typography.heading,
        fontFamily: theme.typography.body.fontFamily,
        marginBottom: theme.spacing.md,
      }}>
        Sample Journey
      </Text>
      <Text style={{
        color: theme.colors.text.subdued,
        fontSize: theme.typography.body.fontSize,
        fontFamily: theme.typography.body.fontFamily,
        marginBottom: theme.spacing.lg,
      }}>
        Brand: {brandName} | Mode: {themeName}
      </Text>
      <ActionButton label="Toggle Theme" onPress={toggleTheme} />
      <View style={{ height: theme.spacing.sm }} />
      <ActionButton label="Disabled Button" disabled />
    </View>
  );
};
