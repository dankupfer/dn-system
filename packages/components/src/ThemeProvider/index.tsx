// packages/components/src/ThemeProvider/index.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  type Token,
  BrandName,
  ThemeMode,
  ProcessedTheme,
  processTokens,
  getToken,
  getNumericToken,
  getAllTokens,
  FontLoader,
} from '@dn/tokens';

interface ThemeContextType {
  theme: ProcessedTheme;
  brand: BrandName;
  themeMode: ThemeMode;
  setBrand: (brand: BrandName) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  getToken: (tokenName: string) => string;
  getNumericToken: (tokenName: string) => number;
  isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialBrand?: BrandName;
  initialThemeMode?: ThemeMode;
}

const getBrandForTokens = (brand: BrandName, themeMode: ThemeMode): BrandName => {
  if (themeMode === 'dark') {
    return (brand + 'Dark') as BrandName;
  }
  return brand;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialBrand = 'lloyds',
  initialThemeMode = 'light',
}) => {
  const [brand, setBrand] = useState<BrandName>(initialBrand);
  const [themeMode, setThemeMode] = useState<ThemeMode>(initialThemeMode);

  const tokens = getAllTokens() as Token[];
  const tokenBrand = getBrandForTokens(brand, themeMode);
  const theme = processTokens(tokens, tokenBrand, themeMode);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const getTokenValue = (tokenName: string) =>
    getToken(tokenName, tokenBrand, themeMode, tokens);

  const getNumericTokenValue = (tokenName: string) =>
    getNumericToken(tokenName, tokenBrand, themeMode, tokens);

  const contextValue: ThemeContextType = {
    theme,
    brand,
    themeMode,
    setBrand,
    setThemeMode,
    toggleTheme,
    getToken: getTokenValue,
    getNumericToken: getNumericTokenValue,
    isLoading: false,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <FontLoader>
        {children}
      </FontLoader>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return {
    theme: context.theme,
    themeName: context.themeMode,
    brandName: context.brand,
    toggleTheme: context.toggleTheme,
    setTheme: context.setThemeMode,
    setBrand: context.setBrand,
    isLoading: context.isLoading,
    getToken: context.getToken,
    getNumericToken: context.getNumericToken,
  };
};
