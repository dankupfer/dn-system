import React, { ReactNode } from 'react';
import { BrandName, ThemeMode, ProcessedTheme } from '@dn/tokens';
interface ThemeProviderProps {
    children: ReactNode;
    initialBrand?: BrandName;
    initialThemeMode?: ThemeMode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => {
    theme: ProcessedTheme;
    themeName: ThemeMode;
    brandName: BrandName;
    toggleTheme: () => void;
    setTheme: (mode: ThemeMode) => void;
    setBrand: (brand: BrandName) => void;
    isLoading: boolean;
    getToken: (tokenName: string) => string;
    getNumericToken: (tokenName: string) => number;
};
export {};
//# sourceMappingURL=index.d.ts.map