// packages/tokens/src/index.ts

export {
  processTokens,
  getToken,
  getTypographyToken,
  getShadowToken,
  getNumericToken,
  type Token,
  type ProcessedTheme,
  type ThemeMode,
  type BrandName,
  type TypographyValue,
  type ShadowValue
} from './tokenProcessor';

export const fontFamilies = {
  primary: 'GT-Ultra-Median-Regular',
  primaryBold: 'GT-Ultra-Median-Bold',
  primarySemiBold: 'GT-Ultra-Standard-Bold',
  secondary: 'GT-Ultra-Standard-Regular',
} as const;

export type FontFamily = keyof typeof fontFamilies;

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
