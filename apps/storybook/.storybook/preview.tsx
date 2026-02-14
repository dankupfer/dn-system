// apps/storybook/.storybook/preview.tsx
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@dn/components';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider initialBrand="reimaginedLloyds" initialThemeMode="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
