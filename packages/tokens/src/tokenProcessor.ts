// packages/tokens/src/tokenProcessor.ts

export type BrandName =
    | 'reimaginedLloyds'
    | 'reimaginedLloydsDark'
    | 'lloyds'
    | 'halifax'
    | 'bos'
    | 'mbna'
    | 'scottishWidows'
    | 'reimaginedBos'
    | 'reimaginedBosDark'
    | 'reimaginedHalifax'
    | 'reimaginedHalifaxDark'
    | 'reimaginedMbna'
    | 'reimaginedMbnaDark'
    | 'reimaginedScottishWidows'
    | 'reimaginedScottishWidowsDark';

export type ThemeMode = 'light' | 'dark';

export interface TypographyValue {
    font_family: string;
    default_font_size: string | number;
    max_font_size: string | number;
    font_weight: string | number;
    line_height: string | number;
    line_spacing: string | number;
    letter_spacing: string | number;
    ios_classification: string;
    [key: string]: string | number | undefined;
}

export interface ShadowValue {
    x: string;
    y: string;
    blur: string;
}

export interface Token {
    name: string;
    type: 'color' | 'spacing' | 'borderRadius' | 'borderWidth' | 'typography' | 'shadow';
    description?: string | null;
    values: {
        [brandKey: string]: string | TypographyValue | ShadowValue | undefined;
    };
}

export interface ProcessedTheme {
    tokens: {
        [tokenName: string]: string | number;
    };
    colors: {
        action: {
            background: string;
            backgroundPressed: string;
            backgroundDisabled: string;
            text: string;
            border: string;
        };
        brandAccent: {
            background: string;
            backgroundPressed: string;
            text: string;
        };
        page: {
            background: string;
        };
        panel: {
            background: string;
        };
        text: {
            default: string;
            subdued: string;
        };
        border: {
            default: string;
            action: string;
        };
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
    };
    borderRadius: {
        button: number;
    };
    borderWidth: {
        button: number;
    };
    typography: {
        heading: number;
        body: {
            fontSize: number;
            fontFamily: string;
        };
        small: number;
    };
}

export function getToken(
    tokenName: string,
    brand: BrandName,
    themeMode: ThemeMode,
    tokens: Token[]
): string {
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
        if (token.type === 'color' && !value.startsWith('#')) return '#' + value;
        return value;
    }
    if (token.type === 'typography') return String((value as TypographyValue).default_font_size);
    if (token.type === 'shadow') {
        const s = value as ShadowValue;
        return s.x + 'px ' + s.y + 'px ' + s.blur + 'px rgba(0,0,0,0.1)';
    }
    return String(value);
}

export function getTypographyToken(
    tokenName: string,
    brand: BrandName,
    themeMode: ThemeMode,
    tokens: Token[]
): TypographyValue | null {
    const token = tokens.find(t => t.name === tokenName);
    if (!token || token.type !== 'typography') return null;
    const value = token.values[brand];
    if (typeof value === 'string') return null;
    return value as TypographyValue;
}

export function getShadowToken(
    tokenName: string,
    brand: BrandName,
    themeMode: ThemeMode,
    tokens: Token[]
): ShadowValue | null {
    const token = tokens.find(t => t.name === tokenName);
    if (!token || token.type !== 'shadow') return null;
    const value = token.values[brand];
    if (typeof value === 'string') return null;
    return value as ShadowValue;
}

export function getNumericToken(
    tokenName: string,
    brand: BrandName,
    themeMode: ThemeMode,
    tokens: Token[]
): number {
    const value = getToken(tokenName, brand, themeMode, tokens);
    return parseInt(value, 10) || 0;
}

export function processTokens(
    tokens: Token[],
    brand: BrandName,
    themeMode: ThemeMode
): ProcessedTheme {
    const get = (name: string) => getToken(name, brand, themeMode, tokens);
    const getNum = (name: string) => getNumericToken(name, brand, themeMode, tokens);

    const tokenMap: { [k: string]: string | number } = {};
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
