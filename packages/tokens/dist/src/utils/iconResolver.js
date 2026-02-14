// packages/tokens/src/utils/iconResolver.ts
const iconMappings = {
    'home': 'icons|navigation|home',
    'back': 'icons|arrows|chevron_left',
    'close': 'icons|navigation|close',
    'search': 'icons|navigation|search',
    'settings': 'icons|miscellaneous|settings',
    'cards': 'icons|cards|credit_card',
    'payments': 'icons|finance|payment',
};
export const resolveIcon = (iconName) => {
    if (iconName.includes('|'))
        return iconName;
    return iconMappings[iconName] || iconName;
};
export const addIconMapping = (simpleName, fullPath) => {
    iconMappings[simpleName] = fullPath;
};
export const getAvailableIconNames = () => {
    return Object.keys(iconMappings).sort();
};
//# sourceMappingURL=iconResolver.js.map