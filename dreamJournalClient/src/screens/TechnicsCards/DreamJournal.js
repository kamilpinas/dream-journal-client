import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import {IconButton, Title} from 'react-native-paper';
import {theme} from '../../core/theme';
import Button from '../../components/Button';
export function DreamJournal({navigation, route}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/journall.png')}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>PODSTAWY</Title>

        <Paragraph style={styles.subtitle}>Zapamiętywanie snów?</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          Kluczem do doświadczenia świadomego snu jest zapamiętywanie swoich
          snów. (Bez tego możemy mieć świadomy sen każdej nocy, a i tak nie
          będziemy o tym wiedzieć.) W wielu przypadkach wystarczy sama
          autosugestia- często już samo zaśnięcie z intencją zapamiętania snu
          skutkuje jego zapamiętaniem.s
        </Paragraph>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate('Notifications', {user: route.params.user})
          }>
          Ustaw przypomnienie o zapisie snu
        </Button>
        <Paragraph style={styles.subtitle}>Dziennik snów</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          Dodatkowo powinno się prowadzić tzw. dziennik snów- za pomocą formy
          papierowej, w komputerze lub na dyktafonie. W twoim przypadku dziennik
          snów jest już gotowy i czeka na zapisanie twoich snów. W ten sposób
          ilość szczegółów w zapamiętanych snach będzie się zwiększać, dodatkowo
          pomoże to w odnalezieniu swojego znaku sennego (a ten może być kluczem
          do odzyskania świadomości we śnie)
        </Paragraph>
        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate('Notebook', {user: route.params.user})
          }>
          Dziennik snów
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
    backgroundColor: '#c4ae34',
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
