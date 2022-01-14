import React, {useState, useEffect} from 'react';
import {AppRegistry, Platform} from 'react-native';
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
import {NewDream} from './src/screens/NewDream/NewDream';
import BottomTabs from './src/navigations/BottomTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SplashScreen} from './src/screens/SplashScreen';
import {wait} from './src/screens/JournalScreen';
import {UserDataScreen} from './src/screens/UserDataScreen';
import {Intro} from './src/screens/TechnicsCards/Intro';
import {RealityCheck} from './src/screens/TechnicsCards/RealityCheck';
import {DreamJournal} from './src/screens/TechnicsCards/DreamJournal';
import {WILD} from './src/screens/TechnicsCards/WILD';
import {MILD} from './src/screens/TechnicsCards/MILD';
import {Notifications} from './src/screens/Notifications';
import PushNotification from 'react-native-push-notification';

const Stack = createStackNavigator();
//todo zapisac jakos w serwerze info o powiadomieniach
PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  requestPermissions: Platform.OS === 'ios',
});

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
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="RealityCheck" component={RealityCheck} />
          <Stack.Screen name="DreamJournal" component={DreamJournal} />
          <Stack.Screen name="WILD" component={WILD} />
          <Stack.Screen name="MILD" component={MILD} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
