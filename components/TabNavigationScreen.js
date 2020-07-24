import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './ListScreen'
import ProfileData from './ProfileData';


import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function HomeScreen() {
  return (
    <ListScreen />
  );
}

function SettingsScreen() {
  return (
    <ProfileData />
  );
}


const Tab = createBottomTabNavigator();

export default class TabNavigationScreen extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'List') {
              iconName = focused ? 'list' : 'list';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'contacts' : 'contacts';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />
          },
        })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="List" component={HomeScreen} />
          <Tab.Screen name="Profile" component={SettingsScreen} />
        </Tab.Navigator>
    );
  }
}