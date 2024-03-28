import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-gesture-handler';

import AppNavigator from './navigation/AppNavigator';
import globalStyles from './constants/GlobalStyles';

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    'DMSans-Medium': require('./assets/fonts/DMSans-Medium.ttf'),
    'DMSans-Bold': require('./assets/fonts/DMSans-Bold.ttf'),
    'Digitalt': require('./assets/fonts/Digitalt.ttf'),
    'FiraSans-Bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'FiraSans-Medium': require('./assets/fonts/FiraSans-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <View style={globalStyles.container}><Text style={{ color: 'white' }}>Chargement...</Text></View>;
  } else {
    (async () => {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    }
    )();
  }


  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
}