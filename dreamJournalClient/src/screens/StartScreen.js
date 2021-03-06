import React from 'react';
import {BackHandler} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Witaj w dzienniku snów</Header>
      <Paragraph>
        Twoja przygoda z nowym wymiarem snu rozpoczyna się tutaj
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Logowanie
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Rejestracja
      </Button>
      <Button mode="outlined" onPress={() => BackHandler.exitApp()}>
        Wyjdź
      </Button>
    </Background>
  );
}
