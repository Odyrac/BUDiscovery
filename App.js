import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';

import AppNavigator from './navigation/AppNavigator';
import globalStyles from './constants/GlobalStyles';
import Colors from './constants/Colors';

SplashScreen.preventAutoHideAsync();


export default function App() {

  const { width, height } = Dimensions.get('window');
  const targetWidth = 800;
  const targetHeight = 1285;

  let isWrongRatio = false;
  if (width < 790 || width > 810 || height < 1275 || height > 1295) {
    isWrongRatio = true;
    var scale = Math.min(width / targetWidth, height / targetHeight);
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    wrongRatioContainer: {
      width: targetWidth,
      height: targetHeight,
      transform: [{ scale: scale }],
      bottom: ((targetHeight - height) / 2) + 40,
      left: -((targetWidth - width) / 2),
    },

    wrongRatioBG: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: Colors.veryDarkBlue,
      alignItems: 'center',
      flexDirection: 'column-reverse',
    },

    wrongRatioText: {
      color: Colors.white,
      fontFamily: 'DMSans-Medium',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 55,
      marginHorizontal: 20,
    },

  });

  

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
    <>
      <StatusBar style="auto" />
      {isWrongRatio && <View style={styles.wrongRatioBG}>
        <Text style={styles.wrongRatioText}>BUDiscovery a été conçu pour un appareil ayant une résolution de 800x1285 pixels.</Text>
      </View>}
      <View style={[!isWrongRatio ? styles.container : styles.wrongRatioContainer]}>
        <AppNavigator />
      </View>
    </>
  );
}

