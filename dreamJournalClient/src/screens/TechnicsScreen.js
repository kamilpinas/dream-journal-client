import React from 'react';
import Header from '../components/Header';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TechnicsCard} from '../components/TechnicsCard';
import {theme} from '../core/theme';

export default function TechnicsScreen({navigation}) {
  return (
    <SafeAreaView>
      <Header style={styles.cardTitle}>Techniki świadomego snu</Header>
      <ScrollView style={styles.scrollView}>
        <TechnicsCard
          imgSource={require('../assets/aim_small.png')}
          title="Rozpocznij tutaj"
          subtitle="Wprowadzenie do świadomego śnienia "
          backgroundColor="#783bdb"
          onPress={() => navigation.navigate('Intro')}
        />
        <TechnicsCard
          imgSource={require('../assets/happy_small.png')}
          title="Podstawy"
          subtitle="Testy rzeczywistości"
          backgroundColor="#3bb64bee"
          onPress={() => navigation.navigate('RealityCheck')}
        />
        <TechnicsCard
          imgSource={require('../assets/journall_small.png')}
          title="Podstawy"
          subtitle="Dziennik snów"
          backgroundColor="#c4ae34"
          onPress={() => navigation.navigate('DreamJournal')}
        />
        <TechnicsCard
          imgSource={require('../assets/wake-up_small.png')}
          title="Wypróbuj techniki"
          subtitle="WILD :"
          backgroundColor="#e2407eeb"
          onPress={() => navigation.navigate('WILD')}
        />
        <TechnicsCard
          imgSource={require('../assets/wake-up2_small.png')}
          title="Wypróbuj techniki"
          subtitle="MILD :"
          backgroundColor="#45beb8eb"
          onPress={() => navigation.navigate('MILD')}
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
