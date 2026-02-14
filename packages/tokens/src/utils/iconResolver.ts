// packages/tokens/src/utils/iconResolver.ts

const iconMappings: Record<string, string> = {
  'home': 'icons|navigation|home',
  'back': 'icons|arrows|chevron_left',
  'close': 'icons|navigation|close',
  'search': 'icons|navigation|search',
  'settings': 'icons|miscellaneous|settings',
  'cards': 'icons|cards|credit_card',
  'payments': 'icons|finance|payment',
};

export const resolveIcon = (iconName: string): string => {
  if (iconName.includes('|')) return iconName;
  return iconMappings[iconName] || iconName;
};

export const addIconMapping = (simpleName: string, fullPath: string): void => {
  iconMappings[simpleName] = fullPath;
};

export const getAvailableIconNames = (): string[] => {
  return Object.keys(iconMappings).sort();
};
