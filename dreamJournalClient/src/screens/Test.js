import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
const Tab = createBottomTabNavigator();
export default function Test({navigation}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 18},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="StartScreen" component={StartScreen} />
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
    </Tab.Navigator>
  );
}
