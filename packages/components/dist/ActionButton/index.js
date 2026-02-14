import { jsx as _jsx } from "react/jsx-runtime";
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../ThemeProvider';
export const ActionButton = ({ label, onPress, disabled = false }) => {
    const { theme } = useTheme();
    return (_jsx(TouchableOpacity, { onPress: onPress, disabled: disabled, activeOpacity: 0.8, style: {
            backgroundColor: disabled
                ? theme.colors.action.backgroundDisabled
                : theme.colors.action.background,
            paddingVertical: theme.spacing.sm,
            paddingHorizontal: theme.spacing.lg,
            borderRadius: theme.borderRadius.button,
            borderWidth: theme.borderWidth.button,
            borderColor: theme.colors.action.border,
            alignItems: 'center',
        }, children: _jsx(Text, { style: {
                color: theme.colors.action.text,
                fontSize: theme.typography.body.fontSize,
                fontFamily: theme.typography.body.fontFamily,
            }, children: label }) }));
};
//# sourceMappingURL=index.js.map