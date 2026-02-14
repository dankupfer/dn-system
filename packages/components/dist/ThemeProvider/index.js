import { jsx as _jsx } from "react/jsx-runtime";
// packages/components/src/ThemeProvider/index.tsx
import { createContext, useContext, useState } from 'react';
import { processTokens, getToken, getNumericToken, getAllTokens, FontLoader, } from '@dn/tokens';
const ThemeContext = createContext(undefined);
const getBrandForTokens = (brand, themeMode) => {
    if (themeMode === 'dark') {
        return (brand + 'Dark');
    }
    return brand;
};
export const ThemeProvider = ({ children, initialBrand = 'lloyds', initialThemeMode = 'light', }) => {
    const [brand, setBrand] = useState(initialBrand);
    const [themeMode, setThemeMode] = useState(initialThemeMode);
    const tokens = getAllTokens();
    const tokenBrand = getBrandForTokens(brand, themeMode);
    const theme = processTokens(tokens, tokenBrand, themeMode);
    const toggleTheme = () => {
        setThemeMode(prev => prev === 'light' ? 'dark' : 'light');
    };
    const getTokenValue = (tokenName) => getToken(tokenName, tokenBrand, themeMode, tokens);
    const getNumericTokenValue = (tokenName) => getNumericToken(tokenName, tokenBrand, themeMode, tokens);
    const contextValue = {
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
    return (_jsx(ThemeContext.Provider, { value: contextValue, children: _jsx(FontLoader, { children: children }) }));
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
//# sourceMappingURL=index.js.map