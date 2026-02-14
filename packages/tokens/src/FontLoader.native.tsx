// packages/tokens/src/FontLoader.native.tsx
import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import GTUltraStandardRegular from '../fonts/GT-Ultra-Standard-Regular.ttf';
import GTUltraStandardBold from '../fonts/GT-Ultra-Standard-Bold.ttf';
import GTUltraMedianRegular from '../fonts/GT-Ultra-Median-Regular.ttf';
import GTUltraMedianBold from '../fonts/GT-Ultra-Median-Bold.ttf';

interface FontLoaderProps {
  children: React.ReactNode;
}

export const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'GT-Ultra-Standard-Regular': GTUltraStandardRegular,
      'GT-Ultra-Standard-Bold': GTUltraStandardBold,
      'GT-Ultra-Median-Regular': GTUltraMedianRegular,
      'GT-Ultra-Median-Bold': GTUltraMedianBold,
    })
      .then(() => {
        console.log('Fonts loaded successfully (native)');
        setFontsLoaded(true);
      })
      .catch((err) => {
        console.warn('Font loading error:', err);
        setFontsLoaded(true);
      });
  }, []);

  if (!fontsLoaded) return null;
  return <>{children}</>;
};
