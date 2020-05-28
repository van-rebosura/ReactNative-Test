import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TemperatureUnit from './components/TemperatureUnit';
import HomeScreen from './components/Home';
import AnotherView from './components/AnotherView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Another View">
        <Stack.Screen name="Temperature Converter" component={HomeScreen} />
        <Stack.Screen name="Another View" component={AnotherView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
