import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import {StyleSheet, View} from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <Background>
      <Header>Ustawienia</Header>
      <Button styles={styles.button} mode="contained">
        Dane użytkownika
      </Button>
      <Button styles={styles.button} mode="contained">
        Usuń konto
      </Button>
      <Button styles={styles.button} mode="contained">
        Powiadomienia
      </Button>
      <Button
        styles={styles.button}
        mode="contained"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          })
        }>
        Wyloguj
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 50,
  },
});
