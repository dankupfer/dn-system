// packages/tokens/src/index.ts
export { processTokens, getToken, getTypographyToken, getShadowToken, getNumericToken } from './tokenProcessor';
export const fontFamilies = {
    primary: 'GT-Ultra-Median-Regular',
    primaryBold: 'GT-Ultra-Median-Bold',
    primarySemiBold: 'GT-Ultra-Standard-Bold',
    secondary: 'GT-Ultra-Standard-Regular',
};
export { FontLoader } from './FontLoader';
import tokenData from '../tokens/tokens.json';
import iconData from '../tokens/icons.json';
export const tokens = tokenData;
export const icons = iconData;
export function getAllTokens() {
    return tokens;
}
export function getAllIcons() {
    return icons;
}
export { resolveIcon, addIconMapping, getAvailableIconNames } from './utils/iconResolver';
//# sourceMappingURL=index.js.map