import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from '@dn/components';
import { SampleJourney } from '@dn/journeys';
const AppContent = () => {
    const { theme, themeName, brandName, toggleTheme } = useTheme();
    return (_jsxs(SafeAreaView, { style: { flex: 1, backgroundColor: theme.colors.page.background }, children: [_jsxs(View, { style: { padding: theme.spacing.md }, children: [_jsx(Text, { style: {
                            color: theme.colors.text.default,
                            fontSize: theme.typography.heading,
                            fontFamily: theme.typography.body.fontFamily,
                            marginBottom: theme.spacing.md,
                        }, children: "DN Visualiser" }), _jsxs(Text, { style: { color: theme.colors.action.background, marginBottom: theme.spacing.lg }, onPress: toggleTheme, children: ["Toggle theme (current: ", themeName, ")"] })] }), _jsx(SampleJourney, {})] }));
};
export default function App() {
    return (_jsx(ThemeProvider, { initialBrand: "reimaginedLloyds", initialThemeMode: "light", children: _jsx(AppContent, {}) }));
}
//# sourceMappingURL=App.js.map