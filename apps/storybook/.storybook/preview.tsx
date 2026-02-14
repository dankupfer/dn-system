// apps/storybook/.storybook/preview.tsx
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@dn/components';
import type { BrandName, ThemeMode } from '@dn/tokens';

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Brand theme',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'reimaginedLloyds', title: 'Lloyds (Reimagined)' },
          { value: 'lloyds', title: 'Lloyds (Classic)' },
          { value: 'halifax', title: 'Halifax' },
          { value: 'bos', title: 'Bank of Scotland' },
          { value: 'mbna', title: 'MBNA' },
          { value: 'scottishWidows', title: 'Scottish Widows' },
        ],
        dynamicTitle: true,
      },
    },
    themeMode: {
      description: 'Light or dark mode',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'reimaginedLloyds',
    themeMode: 'light',
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand as BrandName;
      const themeMode = context.globals.themeMode as ThemeMode;

      return (
        <ThemeProvider initialBrand={brand} initialThemeMode={themeMode} key={brand + themeMode}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
