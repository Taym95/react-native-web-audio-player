import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from "@react-navigation/web";
import { Home } from './screens';
import { TrackDetails } from './screens';
import { AudioPlayer } from './components';
import { store } from './store';

const RootStack = createSwitchNavigator({
  initialRouteName: Home,
  Home: {
    screen: Home,
  },
  TrackDetails: {
    screen: TrackDetails,
  },
})


const BrowserApp = createBrowserApp(RootStack);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <BrowserApp />
        <AudioPlayer />
      </Provider>
    </View>
  )
}

