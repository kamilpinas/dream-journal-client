import React, {useState, useEffect} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import {StyleSheet, BackHandler} from 'react-native';
import instance from '../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({navigation}) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  function deleteUser() {
    if (loading) {
      instance
        .delete('/users/' + userData._id)
        .then(function (response) {
          AsyncStorage.removeItem('token');
          AsyncStorage.removeItem('user');
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  const getUserData = async () => {
    try {
      const wg = await AsyncStorage.getItem('user');
      setUserData(JSON.parse(wg));
      setLoading(true);
    } catch (err) {
      setUserData({});
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Background>
      <Header>Ustawienia</Header>
      {userData.role === 'admin' && (
        <Button
          styles={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('ManageUsers', {item: userData})}>
          Zarządzaj użytkownikami
        </Button>
      )}
      <Button
        styles={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('UserDataScreen', {item: userData})}>
        Dane użytkownika
      </Button>
      <Button
        styles={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('Notifications', {user: userData})}>
        Powiadomienia
      </Button>
      <Button styles={styles.button} mode="contained" onPress={deleteUser}>
        Usuń konto
      </Button>
      <Button
        styles={styles.button}
        mode="contained"
        onPress={() => {
          AsyncStorage.removeItem('token');
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          });
        }}>
        Wyloguj
      </Button>
      <Button mode="outlined" onPress={() => BackHandler.exitApp()}>
        Wyjdź
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 50,
  },
});
