import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
// @ts-nocheck
// packages/tokens/src/FontLoader.web.tsx
import { useEffect, useState } from 'react';
import StandardRegular from '../fonts/GT-Ultra-Standard-Regular.woff2';
import StandardBold from '../fonts/GT-Ultra-Standard-Bold.woff2';
import MedianRegular from '../fonts/GT-Ultra-Median-Regular.woff2';
import MedianBold from '../fonts/GT-Ultra-Median-Bold.woff2';
const FONT_FACES = [
    { family: 'GT-Ultra-Standard-Regular', source: StandardRegular, weight: '400' },
    { family: 'GT-Ultra-Standard-Bold', source: StandardBold, weight: '700' },
    { family: 'GT-Ultra-Median-Regular', source: MedianRegular, weight: '400' },
    { family: 'GT-Ultra-Median-Bold', source: MedianBold, weight: '700' },
];
export const FontLoader = ({ children }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        const loadFonts = async () => {
            try {
                const fontPromises = FONT_FACES.map((font) => {
                    const fontFace = new FontFace(font.family, 'url(' + font.source + ')', {
                        weight: font.weight,
                        style: 'normal',
                    });
                    return fontFace.load().then((loaded) => {
                        document.fonts.add(loaded);
                    });
                });
                await Promise.all(fontPromises);
                console.log('Fonts loaded successfully (web)');
            }
            catch (err) {
                console.warn('Font loading error:', err);
            }
            setFontsLoaded(true);
        };
        loadFonts();
    }, []);
    if (!fontsLoaded)
        return null;
    return _jsx(_Fragment, { children: children });
};
//# sourceMappingURL=FontLoader.web.js.map