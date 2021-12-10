import React from 'react';
import Header from '../components/Header';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TechnicsCard} from '../components/TechnicsCard';
import {theme} from '../core/theme';

export default function TechnicsScreen() {
  return (
    <SafeAreaView>
      <Header style={styles.cardTitle}>Techniki świadomego snu</Header>
      <ScrollView style={styles.scrollView}>
        <TechnicsCard
          imgSource={require('../assets/technics_1.png')}
          title="pierwsza technika"
          subtitle="pierwsza technika to bardzo fajna technika polecam"
        />
        <TechnicsCard
          imgSource={require('../assets/technics_2.png')}
          title="druga technika"
          subtitle="druga technika to bardzo fajna technika polecam"
        />
        <TechnicsCard
          imgSource={require('../assets/technics_3.png')}
          title="trzecia technika"
          subtitle="pierwsza technika to bardzo fajna technika polecam"
        />
        <TechnicsCard
          imgSource={require('../assets/technics_4.png')}
          title="czwarta technika"
          subtitle="czwarta technika to bardzo fajna technika polecam"
        />
        <TechnicsCard
          imgSource={require('../assets/technics_5.png')}
          title="piata technika"
          subtitle="piąta technika to bardzo fajna technika polecam"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 12,
  },
  scrollView: {
    marginBottom: 60,
  },
});
