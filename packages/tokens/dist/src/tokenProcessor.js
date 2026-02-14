// packages/tokens/src/tokenProcessor.ts
export function getToken(tokenName, brand, themeMode, tokens) {
    const token = tokens.find(t => t.name === tokenName);
    if (!token) {
        console.log('Token not found: ' + tokenName);
        return '#FF0000';
    }
    const value = token.values[brand];
    if (value === undefined) {
        console.warn('Token value not found: ' + tokenName + ' for ' + brand);
        return '#FF0000';
    }
    if (typeof value === 'string') {
        if (token.type === 'color' && !value.startsWith('#'))
            return '#' + value;
        return value;
    }
    if (token.type === 'typography')
        return value.default_font_size;
    if (token.type === 'shadow') {
        const s = value;
        return s.x + 'px ' + s.y + 'px ' + s.blur + 'px rgba(0,0,0,0.1)';
    }
    return String(value);
}
export function getTypographyToken(tokenName, brand, themeMode, tokens) {
    const token = tokens.find(t => t.name === tokenName);
    if (!token || token.type !== 'typography')
        return null;
    const value = token.values[brand];
    if (typeof value === 'string')
        return null;
    return value;
}
export function getShadowToken(tokenName, brand, themeMode, tokens) {
    const token = tokens.find(t => t.name === tokenName);
    if (!token || token.type !== 'shadow')
        return null;
    const value = token.values[brand];
    if (typeof value === 'string')
        return null;
    return value;
}
export function getNumericToken(tokenName, brand, themeMode, tokens) {
    const value = getToken(tokenName, brand, themeMode, tokens);
    return parseInt(value, 10) || 0;
}
export function processTokens(tokens, brand, themeMode) {
    const get = (name) => getToken(name, brand, themeMode, tokens);
    const getNum = (name) => getNumericToken(name, brand, themeMode, tokens);
    const tokenMap = {};
    tokens.forEach(token => {
        const value = get(token.name);
        tokenMap[token.name] = token.type === 'color' ? value : parseInt(value, 10) || 0;
    });
    return {
        tokens: tokenMap,
        colors: {
            action: {
                background: get('background_action_default'),
                backgroundPressed: get('background_action_pressed'),
                backgroundDisabled: get('background_action_disabled'),
                text: get('text_action_default'),
                border: get('border_action_default'),
            },
            brandAccent: {
                background: get('brand_accent_button_primary_background_default'),
                backgroundPressed: get('brand_accent_button_primary_background_pressed'),
                text: get('text_action_default'),
            },
            page: { background: get('background_page_default') },
            panel: { background: get('background_panel_default') },
            text: { default: get('text_default'), subdued: get('text_subdued') },
            border: { default: get('border_default'), action: get('border_action_default') },
        },
        spacing: {
            xs: getNum('spacing_size_08'),
            sm: getNum('spacing_size_12'),
            md: getNum('spacing_size_16'),
            lg: getNum('spacing_size_24'),
        },
        borderRadius: { button: getNum('action_button_default_corner_radius') },
        borderWidth: { button: getNum('action_button_border_width') },
        typography: {
            heading: getNum('style_1'),
            body: {
                fontSize: getNum('style_3'),
                fontFamily: getTypographyToken('style_3', brand, themeMode, tokens)?.font_family || 'System',
            },
            small: getNum('style_5'),
        },
    };
}
//# sourceMappingURL=tokenProcessor.js.map