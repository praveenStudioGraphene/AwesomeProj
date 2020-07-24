import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabNavigationScreen from './components/TabNavigationScreen';
import LoginScreen from './components/LoginScreen';
const navigator = createStackNavigator();
const LoginStackNavigator = createStackNavigator();
const TabStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <navigator.Navigator initialRouteName="LoginScreen">
        <navigator.Screen name="LoginScreen" component={LoginScreen} />
        <navigator.Screen name="TabNavigationScreen" component={TabNavigationScreen} />
      </navigator.Navigator>
    </NavigationContainer>
  );
}