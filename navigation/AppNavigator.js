import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import TestScreen from './../screens/Test';
import HomeScreen from './../screens/Home';
import GroupNameScreen from '../screens/GroupName';
import ChoiceThemeScreen from '../screens/ChoiceTheme';
import ChronoScreen from '../screens/Chrono';
import WelcomeScreen from '../screens/Welcome';
import GameControllerScreen from '../screens/GameController';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="GroupName" component={GroupNameScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ChoiceTheme" component={ChoiceThemeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Chrono" component={ChronoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="GameController" component={GameControllerScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;