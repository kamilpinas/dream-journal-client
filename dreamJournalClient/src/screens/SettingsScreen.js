import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import {Button} from 'react-native-paper';

export default function SettingsScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Ustawienia</Header>
      <Paragraph>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </Paragraph>
      <Button
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
