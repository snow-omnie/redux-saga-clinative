import { View, Text } from 'react-native'
import React from 'react'
import { Props } from './HomeScreen'
import { WebView } from 'react-native-webview';

const WebScreen = ({ navigation }: Props): JSX.Element => {
    const INJECTED_JAVASCRIPT = `(function() {
        window.ReactNativeWebView.postMessage(JSON.stringify('snow'));
    })();`;
    const onMessage = (data: any) => {
        console.log('web view data ', data.nativeEvent.data);
    }
    return (
        <WebView
            source={{ uri: 'https://github.com/react-native-webview/react-native-webview' }}
            style={{ flex: 1 }}
            injectedJavaScript={INJECTED_JAVASCRIPT}
            onMessage={onMessage}
            injectedJavaScriptForMainFrameOnly={false}
            onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
            }}
        />
    )
}

export default WebScreen