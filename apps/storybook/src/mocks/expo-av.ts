import React from 'react';
import { View } from 'react-native';

export const Audio = {
    Recording: class {
        prepareToRecordAsync() { return Promise.resolve(); }
        startAsync() { return Promise.resolve(); }
        stopAndUnloadAsync() { return Promise.resolve(); }
        getURI() { return null; }
    },
    Sound: {
        createAsync: () => Promise.resolve({ sound: { playAsync: () => { }, unloadAsync: () => { } } }),
    },
    setAudioModeAsync: () => Promise.resolve(),
    requestPermissionsAsync: () => Promise.resolve({ granted: true }),
};

export const Video = (props: any) =>
    React.createElement(View, { ...props, style: [props.style, { backgroundColor: '#000' }] });