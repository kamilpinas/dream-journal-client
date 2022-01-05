import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import {theme} from '../core/theme';

export function SplashScreen({isLoading}) {
  return (
    <Background>
      <Logo />
      <Header>Witaj w dzienniku snów</Header>
      <Paragraph>
        Twoja przygoda z nowym wymiarem snu rozpoczyna się tutaj
      </Paragraph>
      <ActivityIndicator
        animating={isLoading}
        color={theme.colors.primary}
        size={'large'}
      />
    </Background>
  );
}
