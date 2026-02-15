// apps/storybook/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
      'expo-linear-gradient': path.resolve(__dirname, 'src/mocks/expo-linear-gradient.ts'),
      'expo-av': path.resolve(__dirname, 'src/mocks/expo-av.ts'),
    },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
  },
  assetsInclude: ['**/*.woff2', '**/*.ttf'],
});
