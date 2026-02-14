export { processTokens, getToken, getTypographyToken, getShadowToken, getNumericToken, type Token, type ProcessedTheme, type ThemeMode, type BrandName, type TypographyValue, type ShadowValue } from './tokenProcessor';
export declare const fontFamilies: {
    readonly primary: "GT-Ultra-Median-Regular";
    readonly primaryBold: "GT-Ultra-Median-Bold";
    readonly primarySemiBold: "GT-Ultra-Standard-Bold";
    readonly secondary: "GT-Ultra-Standard-Regular";
};
export type FontFamily = keyof typeof fontFamilies;
export { FontLoader } from './FontLoader';
export declare const tokens: ({
    name: string;
    type: string;
    description: string;
    values: {
        reimaginedLloyds: string;
        reimaginedLloydsDark: string;
        lloyds: string;
        halifax: string;
        bos: string;
        mbna: string;
        scottishWidows: string;
        reimaginedBos: string;
        reimaginedBosDark: string;
        reimaginedHalifax: string;
        reimaginedHalifaxDark: string;
        reimaginedMbna: string;
        reimaginedMbnaDark: string;
        reimaginedScottishWidows: string;
        reimaginedScottishWidowsDark: string;
    };
} | {
    name: string;
    type: string;
    description: string;
    values: {
        reimaginedLloyds: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedLloydsDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        lloyds: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        halifax: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        bos: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        mbna: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        scottishWidows: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedBos: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedBosDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedHalifax: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedHalifaxDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedMbna: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedMbnaDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedScottishWidows: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedScottishWidowsDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
    };
} | {
    name: string;
    type: string;
    description: string;
    values: {
        reimaginedLloyds: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedLloydsDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        lloyds: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        halifax: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        bos: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        mbna: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        scottishWidows: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedBos: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedBosDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedHalifax: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedHalifaxDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedMbna: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedMbnaDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedScottishWidows: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedScottishWidowsDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
    };
})[];
export declare const icons: {
    "icons|finance|deposit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cashpoint": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cheque": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|compact": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|small_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|top_outlined": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|accordion|closed": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|accordion|open": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bank_logo|bank_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_1_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_1_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_2_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_2_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_3_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_3_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_4_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_4_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_5_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_5_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|brand|bg_logo": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|brand|bg_logo_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|card_hub|blocked": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|card_hub|frozen": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|finance|apple_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|finance|google_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|floating_chat_button|collapsed": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|clock|black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|error": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|info": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|success": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|warning": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|picker|calendar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|premier|tag": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|spinner|padlock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|minus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|minus_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|minus_alt_01_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|plus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|plus_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|plus_alt_01_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|tick": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_left": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_right": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_left": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_right": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|card_freeze": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|card_linked": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|credit_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|debit_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|freeze": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|lost_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|top_cards": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|view_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|wallet": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|apply": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|chat": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|email": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|feedback": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|headset": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|help_with_debt": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|message": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|phone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|question_mark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_down_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_up_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|currency|dollar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|currency|euro": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|currency|foreign_currency": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|clock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|date": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|history": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|pending": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|standing_order": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|subscriptions": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|timer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|broken_phone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|device_theme_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|laptop": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|mobile": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|screens": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|compare": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|document_add": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|document_success_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|document_success_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|documents": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|download": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|search_transactions_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|search_transactions": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|survey": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|upload": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|cut_copy_paste": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|delete": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|edit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|reorder_accounts": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|additional_borrowing": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|apple_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|balance_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|balance_transfer_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank_accounts": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank_giro": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bill": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cash": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cash_cheque": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cashback": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|change": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|close_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|coins": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|current_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|deposit_cash": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|digital_receipt": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|easier_payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|fast_payment_in": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|fast_payment_out": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|fees": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financial": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financial_growth": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financial_resilience": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financing": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|google_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|interest": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|international_payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|internet_banking": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|investment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|isa": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|jar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|loans": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|mobile_payment_in": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|mobile_payment_out": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|money_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|more_transactions": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|move_bank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|office": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|overdraft": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|personal_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|regular_payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|replace_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|replace_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|savings_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|scamp": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|secure_banking": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|switching_arrows": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|transfer_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|transfer_an_isa": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|advancing_your_career": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|gift": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|home_deposit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|home_equity": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|home_improvements": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|jewellery": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|moving_home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|planning_for_retirement": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|reducing_debt": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|safety_net": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|credit_score": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|graph": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|line_chart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|pie_chart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|pie_chart_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|health|covid": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|health|healthcare": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|health|heart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|cat_and_dog": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|dumbell": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|eating_out": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|present": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|prize_draw": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|ring": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|school": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|shopping_bag": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|ticket": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|trophy": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|accessibility": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|apple_id": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|direct_to_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|google_deposit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|facebook": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|hearing": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|harc": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|linkedin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|windows": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|x": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|youtube": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|calculator": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|camera": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|cloud": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|dial": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|exit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|grid_view": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|lightbulb": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|list_view": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|loyalty_plus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|new_tab": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|notification_working_app_code": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|percent": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|printer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|qr_code": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|return_package": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|settings": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|spinner": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|star": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|star_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|subscription": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|three": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|trolley": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|view_pin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|burger_menu": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|close": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|kebab_menu": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|menu": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|microphone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|microphone_off": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|notifications": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|search": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|couple": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|existing_customers": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|new_customer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|nurturing_a_family": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|person": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|profile_settings": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|single": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|starting_a_family": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|three_people": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|two_people": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|placeholder|placeholder": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|hide": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|id": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|identity": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|key": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|lock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|password": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|pin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|scan_id": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|secure_banking": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|secure_home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|shield": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|show": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|unlocked": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|unlocked_critical": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|critical_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|cross": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|cross_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|info": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|info_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|success": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|success_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|warning": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|warning_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|share|copy": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|share|share": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|breakdown_cover": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|car": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|holiday": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|location": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|plane": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|rainy_day": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|suitcase": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|train": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|van": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|forward": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|forward_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|pause": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|pause_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|play_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|play_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|play": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|rewind": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|rewind_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|weather|snowflake": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|weather|sun": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|bos": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|bos_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|bos_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|halifax": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|halifax_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|halifax_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|lloyds": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|lloyds_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|lloyds_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|mbna": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|mbna_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|mbna_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|sw": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|sw_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|sw_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|mastercard": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|plus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|plus_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_credit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_credit_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_debit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_debit_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|face": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|agriculture": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|sit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|apply": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|blank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|basket": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|bin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|calculator": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|calendar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|car": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|cards": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|case_studies": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|current_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|security": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|forward": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|headset": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|healthcare": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|healthcare_certificate": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|holiday": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|jar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|insurance_safe": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|investment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|large_business": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|legal": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|links": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|lock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|manufacturing_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|manufacturing_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|message": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|microphone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|microphone_off": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|mobile_card_reader": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|notifications": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|other_vehicle": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|papers": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_in_person": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_online_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_online_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_over_the_phone_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_over_the_phone_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|payment_authentication": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pencil": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|person": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pie_chart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|piggy_bank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|play": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|portable_card_reader": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|real_estate": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|rewind": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|save_and_invest_jar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|scan_passport_chip": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|search": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|search_transaction": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|settings": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|shield": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|small_business": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|statement": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|subscription": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|technology": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|thumb_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|thumb_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|ticket": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|trade_career": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|trophy": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|unlocked_padlock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|view_pin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|wallet": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
};
export declare function getAllTokens(): ({
    name: string;
    type: string;
    description: string;
    values: {
        reimaginedLloyds: string;
        reimaginedLloydsDark: string;
        lloyds: string;
        halifax: string;
        bos: string;
        mbna: string;
        scottishWidows: string;
        reimaginedBos: string;
        reimaginedBosDark: string;
        reimaginedHalifax: string;
        reimaginedHalifaxDark: string;
        reimaginedMbna: string;
        reimaginedMbnaDark: string;
        reimaginedScottishWidows: string;
        reimaginedScottishWidowsDark: string;
    };
} | {
    name: string;
    type: string;
    description: string;
    values: {
        reimaginedLloyds: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedLloydsDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        lloyds: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        halifax: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        bos: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        mbna: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        scottishWidows: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedBos: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedBosDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedHalifax: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedHalifaxDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedMbna: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedMbnaDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedScottishWidows: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
        reimaginedScottishWidowsDark: {
            x: number;
            y: number;
            blur: number;
            font_family?: undefined;
            default_font_size?: undefined;
            max_font_size?: undefined;
            font_weight?: undefined;
            line_height?: undefined;
            line_spacing?: undefined;
            letter_spacing?: undefined;
            ios_classification?: undefined;
        };
    };
} | {
    name: string;
    type: string;
    description: string;
    values: {
        reimaginedLloyds: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedLloydsDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        lloyds: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        halifax: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        bos: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        mbna: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        scottishWidows: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedBos: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedBosDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedHalifax: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedHalifaxDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedMbna: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedMbnaDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedScottishWidows: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
        reimaginedScottishWidowsDark: {
            font_family: string;
            default_font_size: number;
            max_font_size: number;
            font_weight: string;
            line_height: number;
            line_spacing: number;
            letter_spacing: number;
            ios_classification: string;
            x?: undefined;
            y?: undefined;
            blur?: undefined;
        };
    };
})[];
export declare function getAllIcons(): {
    "icons|finance|deposit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cashpoint": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cheque": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|compact": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|small_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|size|top_outlined": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|accordion|closed": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|accordion|open": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bank_logo|bank_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_1_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_1_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_2_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_2_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_3_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_3_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_4_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_4_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_5_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|bottom_navigation|tab_5_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|brand|bg_logo": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|brand|bg_logo_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|card_hub|blocked": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|card_hub|frozen": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|finance|apple_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|finance|google_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|floating_chat_button|collapsed": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|clock|black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|error": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|info": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|success": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|notification|warning": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|picker|calendar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|premier|tag": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "components|spinner|padlock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|minus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|minus_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|minus_alt_01_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|plus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|plus_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|plus_alt_01_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|action|tick": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_left": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_right": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|arrow_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_left": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_right": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|arrows|chevron_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|card_freeze": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|card_linked": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|credit_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|debit_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|freeze": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|lost_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|top_cards": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|view_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|cards|wallet": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|apply": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|chat": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|email": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|feedback": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|headset": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|help_with_debt": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|message": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|phone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|question_mark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_down_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|communication|thumb_up_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|currency|dollar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|currency|euro": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|currency|foreign_currency": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|clock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|date": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|history": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|pending": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|standing_order": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|subscriptions": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|date_and_time|timer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|broken_phone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|device_theme_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|laptop": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|mobile": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|devices|screens": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|compare": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|document_add": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|document_success_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|document_success_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|documents": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|download": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|search_transactions_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|search_transactions": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|survey": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|documents|upload": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|cut_copy_paste": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|delete": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|edit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|edit|reorder_accounts": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|additional_borrowing": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|apple_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|balance_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|balance_transfer_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank_accounts": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank_giro": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bank_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|bill": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cash": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cash_cheque": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|cashback": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|change": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|close_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|coins": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|current_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|deposit_cash": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|digital_receipt": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|easier_payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|fast_payment_in": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|fast_payment_out": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|fees": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financial": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financial_growth": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financial_resilience": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|financing": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|google_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|interest": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|international_payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|internet_banking": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|investment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|isa": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|jar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|loans": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|mobile_payment_in": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|mobile_payment_out": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|money_transfer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|more_transactions": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|move_bank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|office": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|overdraft": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|personal_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|regular_payment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|replace_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|replace_card": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|savings_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|scamp": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|secure_banking": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|switching_arrows": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|transfer_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|finance|transfer_an_isa": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|advancing_your_career": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|gift": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|home_deposit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|home_equity": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|home_improvements": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|jewellery": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|moving_home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|planning_for_retirement": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|reducing_debt": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|goals|safety_net": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|credit_score": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|graph": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|line_chart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|pie_chart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|graphs|pie_chart_alt_01": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|health|covid": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|health|healthcare": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|health|heart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|cat_and_dog": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|dumbell": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|eating_out": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|present": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|prize_draw": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|ring": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|school": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|shopping_bag": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|ticket": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|lifestyle|trophy": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|accessibility": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|apple_id": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|direct_to_pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|google_deposit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|facebook": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|hearing": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|harc": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|linkedin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|windows": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|x": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|logo_markup|youtube": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|calculator": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|camera": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|cloud": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|dial": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|exit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|grid_view": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|lightbulb": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|list_view": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|loyalty_plus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|new_tab": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|notification_working_app_code": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|percent": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|printer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|qr_code": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|return_package": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|settings": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|spinner": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|star": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|star_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|subscription": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|three": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|trolley": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|miscellaneous|view_pin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|burger_menu": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|close": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|kebab_menu": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|menu": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|microphone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|microphone_off": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|notifications": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|navigation|search": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|couple": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|existing_customers": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|new_customer": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|nurturing_a_family": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|person": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|profile_settings": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|single": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|starting_a_family": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|three_people": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|people|two_people": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|placeholder|placeholder": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|hide": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|id": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|identity": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|key": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|lock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|password": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|pin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|scan_id": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|secure_banking": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|secure_home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|shield": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|show": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|unlocked": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|security|unlocked_critical": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|critical_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|cross": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|cross_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|info": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|info_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|success": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|success_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|warning": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|sentiment_system|warning_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|share|copy": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|share|share": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|breakdown_cover": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|car": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|holiday": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|location": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|plane": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|rainy_day": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|suitcase": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|train": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|travel|van": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|forward": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|forward_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|pause": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|pause_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|play_active": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|play_default": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|play": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|rewind": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|video|rewind_filled": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|weather|snowflake": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "icons|weather|sun": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|bos": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|bos_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|bos_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|halifax": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|halifax_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|halifax_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|lloyds": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|lloyds_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|lloyds_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|mbna": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|mbna_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|mbna_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|sw": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|sw_dark_mode": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|brand|sw_wordmark": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|mastercard": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|plus": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|plus_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_credit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_credit_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_debit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "logos|payment_network|visa_debit_black": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|face": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|agriculture": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|sit": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|apply": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|blank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|basket": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|bin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|calculator": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|calendar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|car": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|cards": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|case_studies": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|current_account": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|security": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|forward": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|headset": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|healthcare": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|healthcare_certificate": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|holiday": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|home": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|jar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|insurance_safe": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|investment": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|large_business": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|legal": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|links": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|lock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|manufacturing_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|manufacturing_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|message": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|microphone": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|microphone_off": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|mobile_card_reader": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|notifications": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|other_vehicle": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|papers": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_in_person": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_online_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_online_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_over_the_phone_1": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pay_over_the_phone_2": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|payment_authentication": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pencil": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|person": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|pie_chart": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|piggy_bank": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|play": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|portable_card_reader": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|real_estate": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|rewind": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|save_and_invest_jar": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|scan_passport_chip": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|search": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|search_transaction": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|settings": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|shield": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|small_business": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|statement": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|subscription": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|technology": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|thumb_down": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|thumb_up": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|ticket": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|trade_career": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|trophy": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|unlocked_padlock": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|view_pin": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
    "pictograms|generic|wallet": {
        lloyds: {
            light: string;
            dark: string;
        };
        halifax: {
            light: string;
            dark: string;
        };
        bos: {
            light: string;
            dark: string;
        };
        mbna: {
            light: string;
            dark: string;
        };
        scottishWidows: {
            light: string;
            dark: string;
        };
    };
};
export { resolveIcon, addIconMapping, getAvailableIconNames } from './utils/iconResolver';
//# sourceMappingURL=index.d.ts.map