import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import BackButton from '../../components/BackButton';
import {IconButton, Title} from 'react-native-paper';
import Button from '../../components/Button';
import {theme} from '../../core/theme';
export function Intro({navigation}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image source={require('../../assets/aim.png')} style={styles.image} />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>ROZPOCZNIJ TUTAJ</Title>
        <Paragraph style={styles.subtitle}>Czym jest świadomy sen?</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          Świadomy sen (ang. Lucid Dream, w skrócie LD) - sen w którym osoba
          śpiąca ma świadomość, że śni i zna fakty z tego wynikające. To, do
          jakiego stopnia możemy kontrolować sen i jak jest on wyraźny, zależy
          od doświadczenia osoby, która śpi. {'\n'}
          {'\n'}Szacuje się, że 20% populacji uzyskało spontaniczny świadomy
          sen.{'\n'}
          {'\n'}
          Świadomy sen może nam posłużyć do wielu czynności. Wiele osób zwalcza
          koszmary śniąc. Podczas takiego snu można też się bawić np. latać.
          Wiele osób zwiedza różne miejsca w sennym świecie, ktorych nie ma u
          nas, na Ziemi! Niektórzy traktują go również jako sposób na odzyskanie
          czasu oraz przeżycia rewelacyjnej przygody. Często po doświadczeniu
          świadomego snu nasze samopoczucie staje się dużo lepsze.{'\n'}
          {'\n'}
          Świadomego śnienia można się nauczyć. Istnieje wiele technik
          pozwalających uzyskać LD. Jedną z najpopularniejszych jest WILD (Wake
          Initiated Lucid Dream lub Wake Induced Lucid Dream). Dla
          początkujących zaleca się WBTB. Wiele osób stosuje różnego rodzaju
          zioła, ponieważ w nich znajdują się substancje pomagające uzyskać
          świadomy sen.{'\n'}
        </Paragraph>
        <Button mode="contained" onPress={() => navigation.navigate('WILD')}>
          TECHNIKA WBTB
        </Button>

        <Button mode="contained" onPress={() => navigation.navigate('WILD')}>
          TECHNIKA WILD
        </Button>

        <Button mode="contained" onPress={() => navigation.navigate('MILD')}>
          TECHNIKA MILD
        </Button>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    position: 'relative',
    backgroundColor: '#783bdb',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: theme.fontSizes.secondary,
    fontWeight: 'normal',
  },
  subtitle: {
    paddingVertical: 10,
    fontSize: theme.fontSizes.primary,
    fontWeight: 'bold',
  },
});
