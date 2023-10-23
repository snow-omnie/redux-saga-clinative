/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from "./src/Navigators"
import SplashScreen from 'react-native-splash-screen'
import { configure, storiesOf, Theme } from "@storybook/react-native"

function App(): JSX.Element {

  useEffect(() => {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();

  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
