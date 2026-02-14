// apps/visualiser/App.tsx
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from '@dn/components';
import { SampleJourney } from '@dn/journeys';

const AppContent: React.FC = () => {
  const { theme, themeName, brandName, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.page.background }}>
      <View style={{ padding: theme.spacing.md }}>
        <Text style={{
          color: theme.colors.text.default,
          fontSize: theme.typography.heading,
          fontFamily: theme.typography.body.fontFamily,
          marginBottom: theme.spacing.md,
        }}>
          DN Visualiser
        </Text>
        <Text
          style={{ color: theme.colors.action.background, marginBottom: theme.spacing.lg }}
          onPress={toggleTheme}
        >
          Toggle theme (current: {themeName})
        </Text>
      </View>
      <SampleJourney />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ThemeProvider initialBrand="reimaginedLloyds" initialThemeMode="light">
      <AppContent />
    </ThemeProvider>
  );
}
