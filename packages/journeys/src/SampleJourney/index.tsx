// packages/journeys/src/SampleJourney/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@dn/components';
import { type ProcessedTheme } from '@dn/tokens';

export const SampleJourney: React.FC = () => {
  const { theme, brandName, themeName } = useTheme();

  return (
    <View style={{ flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.page.background }}>
      <Text style={{ color: theme.colors.text.default, fontSize: theme.typography.body.fontSize }}>
        Sample Journey
      </Text>
      <Text style={{ color: theme.colors.text.subdued, marginTop: theme.spacing.xs }}>
        Brand: {brandName} | Mode: {themeName}
      </Text>
    </View>
  );
};
