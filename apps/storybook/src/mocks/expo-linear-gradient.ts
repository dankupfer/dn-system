// src/mocks/expo-linear-gradient.ts
// Mock for expo-linear-gradient to be used in Storybook, since it relies on native code and cannot be used in a web environment. This mock will simply render a div with a background gradient based on the provided colors.
import React from 'react';
import { View } from 'react-native';

export const LinearGradient = ({ colors, start, end, style, children, ...props }: any) => {
    const cssGradient = colors
        ? `linear-gradient(to bottom, ${colors.join(', ')})`
        : undefined;

    return React.createElement(
        View,
        {
            ...props,
            style: [style, { backgroundImage: cssGradient }],
        },
        children
    );
};

export default LinearGradient;