import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text } from 'react-native';
import { useTheme, ActionButton } from '@dn/components';
export const SampleJourney = () => {
    const { theme, brandName, themeName, toggleTheme } = useTheme();
    return (_jsxs(View, { style: { flex: 1, padding: theme.spacing.md, backgroundColor: theme.colors.page.background }, children: [_jsx(Text, { style: {
                    color: theme.colors.text.default,
                    fontSize: theme.typography.heading,
                    fontFamily: theme.typography.body.fontFamily,
                    marginBottom: theme.spacing.md,
                }, children: "Sample Journey" }), _jsxs(Text, { style: {
                    color: theme.colors.text.subdued,
                    fontSize: theme.typography.body.fontSize,
                    fontFamily: theme.typography.body.fontFamily,
                    marginBottom: theme.spacing.lg,
                }, children: ["Brand: ", brandName, " | Mode: ", themeName] }), _jsx(ActionButton, { label: "Toggle Theme", onPress: toggleTheme }), _jsx(View, { style: { height: theme.spacing.sm } }), _jsx(ActionButton, { label: "Disabled Button", disabled: true })] }));
};
//# sourceMappingURL=index.js.map