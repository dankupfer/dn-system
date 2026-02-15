// apps/storybook/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    __DEV__: true,
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
      'expo-linear-gradient': path.resolve(__dirname, 'src/mocks/expo-linear-gradient.ts'),
      'expo-av': path.resolve(__dirname, 'src/mocks/expo-av.ts'),
      '@react-native-async-storage/async-storage': path.resolve(__dirname, 'src/mocks/async-storage.ts'),
      'react-native-safe-area-context': path.resolve(__dirname, 'src/mocks/safe-area-context.ts'),
    },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
  },
  assetsInclude: ['**/*.woff2', '**/*.ttf'],
});
