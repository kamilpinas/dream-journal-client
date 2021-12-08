import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';

export default function TechnicsScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Techniki świadomego snu</Header>
      <Paragraph>
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </Paragraph>
    </Background>
  );
}
