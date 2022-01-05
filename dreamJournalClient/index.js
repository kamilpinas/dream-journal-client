import React, {useState, useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from './src/core/theme';
import {name as appName} from './app.json';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens';
import {NewDream} from './src/components/NewDream';
import BottomTabs from './src/navigations/BottomTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SplashScreen} from './src/screens/SplashScreen';
import {wait} from './src/screens/JournalScreen';
import {UserDataScreen} from './src/screens/UserDataScreen';

const Stack = createStackNavigator();
export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(true);
  const [token, setToken] = useState('');

  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem('token');
      if (authDataString) {
        setToken(authDataString);
        setLoadingComplete(false);
      }
    } catch (err) {
      setToken('');
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);
  //todo gdy apka sie sypnie jakis timeout by pwotorzyc
  if (isLoadingComplete) {
    return <SplashScreen isLoading={isLoadingComplete} />;
  }

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={token ? 'Dashboard' : 'StartScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="Dashboard" component={BottomTabs} />
          <Stack.Screen name="NewDream" component={NewDream} />
          <Stack.Screen name="UserDataScreen" component={UserDataScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
