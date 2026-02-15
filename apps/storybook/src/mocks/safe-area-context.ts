import React from 'react';
import { View } from 'react-native';

export const SafeAreaView = (props: any) => React.createElement(View, props);
export const SafeAreaProvider = (props: any) => React.createElement(View, props);
export const useSafeAreaInsets = () => ({ top: 0, bottom: 0, left: 0, right: 0 });
export const useSafeAreaFrame = () => ({ x: 0, y: 0, width: 390, height: 844 });
export const SafeAreaInsetsContext = React.createContext({ top: 0, bottom: 0, left: 0, right: 0 });

export default { SafeAreaView, SafeAreaProvider, useSafeAreaInsets, useSafeAreaFrame };