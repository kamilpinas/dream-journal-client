import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import {IconButton, Title} from 'react-native-paper';
import {theme} from '../../core/theme';
export function WBTB({navigation}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/sleeping.png')}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>WYPRÓBUJ TECHNIKI</Title>
        <Paragraph style={styles.subtitle}>WBTB - (Wake Back To Bed)</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          WBTB (6+1) - Wake Back To Bed, czyli wstań, wróć do łóżka. "Sześć"
          oznacza ilość godzin, po których musimy się przebudzić, natomiast
          "jeden" to czas, który spędzamy na rozbudzenie się.
        </Paragraph>

        <Paragraph style={styles.subtitle}>Opis techniki</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          1. Nastaw budzik lub alfa-budzik na 6 godzin do przodu. Następnie
          pójdź spać o dogodnej dla Ciebie porze. Przykład: idę spać o godzinie
          24, więc nastawiam budzik na 6 rano.
          {'\n \n'}
          2. Obudź się po 6 godzinach snu za pomocą budzika lub poprzez
          zastosowanie alfa-budzika. To najgorszy moment, w którym bez motywacji
          z powrotem zaśniesz. Jeśli zależy Ci na świadomym śnie, przemóż się i
          wstań. Pomyśl, że tak niewiele brakuje do świadomego snu i nie warto
          zaprzepaścić tak dogodnej chwili.{'\n \n'}
          3. Gdy wstaniesz z łóżka rób coś, co pozwoli Ci się nieco rozbudzić.
          Możesz iść do toalety, umyć twarz wodą, napić się, przegryźć coś.
          Jeśli prowadzisz dziennik snów, warto przypomnieć sobie i zanotować w
          nim sny. Gdy pochodzisz trochę po domu, pójdź do swojego pokoju i
          usiądź na łóżku. Wtedy wystarczy, że poczekasz, aż od pobudki minie
          godzina. Jednak wbrew pozorem nie trzeba czekać tak długo, ponieważ 40
          min. w zupełności wystarczy.{'\n \n'}
          4. Zastosuj autosugestię. Cały czas myśl o tym, że za godzinę
          doświadczysz świadomego snu. To bardzo ważne, aby nie zwątpić w swoje
          umiejętności. Autosugestia jest dodatkowym krokiem, ale nieco
          podniesie szansę na świadomy sen.{'\n \n'}W ramach autosugestii
          powtarzaj:
          {'\n \n'}
          <Paragraph
            style={{textAlign: 'left', fontStyle: 'italic', color: 'grey'}}>
            "Gdy zasnę będę mieć świadomy sen." "Osiągnę świadomy sen." "Będę
            pamiętać, żeby uświadomić się."
          </Paragraph>
          {'\n \n'}
          4. Po upłynięciu wyznaczonego czasu zaśnij. Ponad godzinę po zaśnięciu
          pojawi się sen. Wówczas uświadomisz się lub zaczniesz zastawiać się,
          czy znajdujesz się w śnie. Jeśli będziesz się wahać, nie zapomnij
          wykonać testu rzeczywistości. Następnie ciesz się świadomym snem.
        </Paragraph>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    position: 'relative',
    backgroundColor: '#e48372f2',
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
