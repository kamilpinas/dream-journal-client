import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BarIcon, BarLabel} from './BottomBarComponents';
import {
  JournalScreen,
  SharedDreamsScreen,
  StatisticsScreen,
  SettingsScreen,
  TechnicsScreen,
} from '../screens';
import PushNotification from 'react-native-push-notification';
import {theme} from '../core/theme';

const Tab = createBottomTabNavigator();
export default function BottomTabs() {
  function createChannel() {
    PushNotification.createChannel({
      channelId: 'realityCheck',
      channelName: 'Reality Check',
    });
    PushNotification.createChannel({
      channelId: 'dailyReminder',
      channelName: 'Daily Reminder',
    });
  }

  useEffect(() => {
    createChannel();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Notebook"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 55},
      }}>
      <Tab.Screen
        name="Notebook"
        component={JournalScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}
              icon="notebook"
            />
          ),
          tabBarLabel: props => (
            <BarLabel
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}>
              Dziennik
            </BarLabel>
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarActiveBackgroundColor: theme.colors.white,
          tabBarInactiveBackgroundColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="sharedDreams"
        component={SharedDreamsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}
              icon="brightness-3"
            />
          ),
          tabBarLabel: props => (
            <BarLabel
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}>
              Sny
            </BarLabel>
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarActiveBackgroundColor: theme.colors.white,
          tabBarInactiveBackgroundColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="teach"
        component={TechnicsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}
              icon="teach"
            />
          ),
          tabBarLabel: props => (
            <BarLabel
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}>
              Techniki
            </BarLabel>
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarActiveBackgroundColor: theme.colors.white,
          tabBarInactiveBackgroundColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}
              icon="chart-line"
            />
          ),
          tabBarLabel: props => (
            <BarLabel
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}>
              Statystyki
            </BarLabel>
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarActiveBackgroundColor: theme.colors.white,
          tabBarInactiveBackgroundColor: theme.colors.primary,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: props => (
            <BarIcon
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}
              icon="cogs"
            />
          ),
          tabBarLabel: props => (
            <BarLabel
              {...props}
              color={props.focused ? theme.colors.primary : theme.colors.white}>
              Ustawienia
            </BarLabel>
          ),
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarActiveBackgroundColor: theme.colors.white,
          tabBarInactiveBackgroundColor: theme.colors.primary,
        }}
      />
    </Tab.Navigator>
  );
}
