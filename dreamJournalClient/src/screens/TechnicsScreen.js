import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TechnicsCard} from '../components/TechnicsCard';
import {theme} from '../core/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TechnicsScreen({navigation}) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

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
          onPress={() =>
            navigation.navigate('RealityCheck', {user: loading && userData})
          }
        />
        <TechnicsCard
          imgSource={require('../assets/journall_small.png')}
          title="Podstawy"
          subtitle="Zapamiętywanie snów"
          backgroundColor="#c4ae34"
          onPress={() =>
            navigation.navigate('DreamJournal', {user: loading && userData})
          }
        />
        <TechnicsCard
          imgSource={require('../assets/sleeping_small.png')}
          title="Wypróbuj techniki"
          subtitle="WBTB - (Wake Back To Bed)"
          backgroundColor="#e48372f2"
          onPress={() => navigation.navigate('WBTB')}
        />
        <TechnicsCard
          imgSource={require('../assets/wake-up_small.png')}
          title="Wypróbuj techniki"
          subtitle="WILD - (Wake Induced Lucid Dream)"
          backgroundColor="#e2407eeb"
          onPress={() => navigation.navigate('WILD')}
        />
        <TechnicsCard
          imgSource={require('../assets/wake-up2_small.png')}
          title="Wypróbuj techniki"
          subtitle="MILD - (Mnemonic Induced Lucid Dream)"
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
