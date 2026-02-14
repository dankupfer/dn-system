import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
// packages/tokens/src/FontLoader.native.tsx
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import GTUltraStandardRegular from '../fonts/GT-Ultra-Standard-Regular.ttf';
import GTUltraStandardBold from '../fonts/GT-Ultra-Standard-Bold.ttf';
import GTUltraMedianRegular from '../fonts/GT-Ultra-Median-Regular.ttf';
import GTUltraMedianBold from '../fonts/GT-Ultra-Median-Bold.ttf';
export const FontLoader = ({ children }) => {
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
    if (!fontsLoaded)
        return null;
    return _jsx(_Fragment, { children: children });
};
//# sourceMappingURL=FontLoader.native.js.map