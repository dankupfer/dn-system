export type BrandName = 'reimaginedLloyds' | 'reimaginedLloydsDark' | 'lloyds' | 'halifax' | 'bos' | 'mbna' | 'scottishWidows' | 'reimaginedBos' | 'reimaginedBosDark' | 'reimaginedHalifax' | 'reimaginedHalifaxDark' | 'reimaginedMbna' | 'reimaginedMbnaDark' | 'reimaginedScottishWidows' | 'reimaginedScottishWidowsDark';
export type ThemeMode = 'light' | 'dark';
export interface TypographyValue {
    font_family: string;
    default_font_size: string;
    max_font_size: string;
    font_weight: string;
    line_height: string;
    line_spacing: string;
    letter_spacing: string;
    ios_classification: string;
}
export interface ShadowValue {
    x: string;
    y: string;
    blur: string;
}
export interface Token {
    name: string;
    type: 'color' | 'spacing' | 'borderRadius' | 'borderWidth' | 'typography' | 'shadow';
    description?: string;
    values: {
        [brandKey: string]: string | TypographyValue | ShadowValue;
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
export declare function getToken(tokenName: string, brand: BrandName, themeMode: ThemeMode, tokens: Token[]): string;
export declare function getTypographyToken(tokenName: string, brand: BrandName, themeMode: ThemeMode, tokens: Token[]): TypographyValue | null;
export declare function getShadowToken(tokenName: string, brand: BrandName, themeMode: ThemeMode, tokens: Token[]): ShadowValue | null;
export declare function getNumericToken(tokenName: string, brand: BrandName, themeMode: ThemeMode, tokens: Token[]): number;
export declare function processTokens(tokens: Token[], brand: BrandName, themeMode: ThemeMode): ProcessedTheme;
//# sourceMappingURL=tokenProcessor.d.ts.map