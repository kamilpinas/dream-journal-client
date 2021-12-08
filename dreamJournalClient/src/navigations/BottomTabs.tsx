import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BarIcon, BarLabel} from '../navigations/BottomBarComponents';
import {
  JournalScreen,
  SharedDreamsScreen,
  StatisticsScreen,
  SettingsScreen,
  TechnicsScreen,
} from '../screens';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="notebook"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="notebook"
        component={JournalScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon {...props} color="#681bb0" icon="notebook" />
          ),
          tabBarLabel: props => (
            <BarLabel {...props} color="#681bb0">
              Dziennik
            </BarLabel>
          ),
        }}
      />
      <Tab.Screen
        name="sharedDreams"
        component={SharedDreamsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon {...props} color="#681bb0" icon="brightness-3" />
          ),
          tabBarLabel: props => (
            <BarLabel {...props} color="#681bb0">
              Sny
            </BarLabel>
          ),
        }}
      />
      <Tab.Screen
        name="teach"
        component={TechnicsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon {...props} color="#681bb0" icon="teach" />
          ),
          tabBarLabel: props => (
            <BarLabel {...props} color="#681bb0">
              Techniki
            </BarLabel>
          ),
        }}
      />
      <Tab.Screen
        name="statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon {...props} color="#681bb0" icon="chart-line" />
          ),
          tabBarLabel: props => (
            <BarLabel {...props} color="#681bb0">
              Statystyki
            </BarLabel>
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon {...props} color="#681bb0" icon="cogs" />
          ),
          tabBarLabel: props => (
            <BarLabel {...props} color="#681bb0">
              Ustawienia
            </BarLabel>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
