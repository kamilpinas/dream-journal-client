import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import {IconButton, Title} from 'react-native-paper';
import {theme} from '../../core/theme';
export function MILD({navigation}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/wake-up2.png')}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>WYPRÓBUJ TECHNIKI</Title>
        <Paragraph style={styles.subtitle}>
          MILD - (Mnemonic Induced Lucid Dream){' '}
        </Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          MILD (Mnemonic Induced Lucid Dream) – technika oparta na afirmacjach i
          wizualizacji wykonywanych tuż przed zaśnięciem w celu wywołania
          świadomego snu metodą DILD.{'\n \n'}
          Technika MILD wykorzystuje pamięć prospektywną do zapamiętania zamiaru
          wykonania danej czynności w przyszłości (w tym przypadku do
          zauważenia, że śnimy). Doktor Stephen LaBerge opracował i udoskonalił
          tę technikę na potrzeby swojej pracy doktorskiej, oraz po to, aby móc
          osiągać stan świadomego śnienia kiedy tylko zapragnie. Technika MILD
          działa najefektywniej po przebudzeniu ze snu (przed ponownym
          zaśnięciem) i w czasie drzemki w ciągu dnia.
        </Paragraph>

        <Paragraph style={styles.subtitle}>Opis techniki</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          1. Przed pójściem spać nastaw budzik tak, aby obudził cię 5 godzin po
          rozpoczęciu snu. Jeśli idziesz spać o północy, niech obudzi cię o
          piątej rano. Dlaczego akurat 5 godzin? Po pięciu godzinach snu u
          śniącego kończy się trzecia faza REM (patrz hipnogram). Zamiast
          budzika konwencjonalnego zaleca się użycie alfa-budzika, nie jest to
          jednak konieczne.{'\n \n'}
          2. Kiedy wstaniesz rano najpierw przypomnij sobie dokładnie swój sen.
          Prawdopodobnie ockniesz się z fazy REM, więc nie powinno ci to sprawić
          trudności. Następnie poświęć 15-20 minut na rozbudzenie się (możesz w
          tym czasie zanotować sen do dziennika, o ile rzecz jasna go
          prowadzisz). Jedni potrzebują na to 10 minut, inni 30 – zbadaj swoje
          indywidualne potrzeby. Pochodź po pokoju, poczytaj książkę. Możesz
          przysiąść na krótko do komputera, wskazane jest wypicie szklanki
          herbaty. Kiedy już poczujesz, że jesteś dostatecznie rozbudzony, połóż
          się z powrotem do łóżka.{'\n \n'}
          3. Teraz (podczas zasypiania) skup się na tym, żeby we śnie
          przypomnieć sobie, że to sen. Jako, że to zdanie może okazać się
          niezrozumiałe dla początkujących oneironautów, gwoli wyjaśnienia
          pozwolę sobie zacytować fragment z „Świadomego śnienia”
          Kopydłowskiego:{'\n \n'}
          <Paragraph
            style={{textAlign: 'left', fontStyle: 'italic', color: 'grey'}}>
            Świadome śnienie, M. Kopydłowski: Powinno to wyglądać tak, że nagle
            przypominasz sobie, że śnisz, w taki sposób, w jaki przypominasz
            sobie, że miałeś kupić coś ważnego, gdy jesteś na zakupach.
          </Paragraph>
          {'\n \n'}
          Powtarzaj w myślach „Następnym razem, kiedy będę śnił, będę pamiętał,
          że śnię”. Nadaj tym słowom znaczenie, zrozum je. Skup się na intencji
          przypomnienia sobie we śnie, że znajdujesz się we śnie. To bardzo
          ważne. Jeśli zauważysz, że twoje myśli gdzieś uciekają, przywołaj je
          do porządku, wróć do intencji.{'\n \n'}
          4. Przypomnij sobie sen, z którego właśnie się obudziłeś (jeśli nic
          nie pamiętasz, wyobraź sobie dowolny sen, rozwój wydarzeń). Wczuj się
          w tę sytuację tak, jakbyś śnił owy sen na nowo. Teraz wyobraź sobie,
          że w pewnym momencie przypominasz sobie, że jesteś we śnie. Rozejrzyj
          się dookoła, zauważ coś, co bez wątpienia wskazuje na to, że to sen.
          Krzyknij mentalnie „niemożliwe, udało mi się, to sen!”. Następną
          minutę spędź na wyobrażaniu sobie co byś robił, gdyby to naprawdę był
          świadomy sen. Jeśli zacząłeś latać, poczuj wiatr we włosach, wznoś się
          wysoko i nisko (pamiętaj, że im wyżej, tym chłodniej). Baw się tak,
          jak będziesz bawił się w swoim przyszłym LD.{'\n \n'}
          5. Powtarzaj kroki trzeci i czwarty tak długo, aż poczujesz, że
          „przyjęły się” w twoim umyśle lub po prostu uśniesz. Postaraj się,
          żeby twoją ostatnią myślą przed zaśnięciem była intencja o pamiętaniu
          w czasie snu, że to sen.
        </Paragraph>

        <Paragraph style={styles.subtitle}>Podsumowanie</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          {'\n'}1. Nastaw budzik na 5 godzin snu.
          {'\n'}2. Poświęć kilkanaście minut na pobudzenie ciała i umysłu.
          {'\n'}3. Powtarzaj i zrozum sugestię.
          {'\n'}4. Wizualizuj chwilę, kiedy odzyskujesz świadomość we śnie.
          {'\n'}
          {'\n'}
          Jeśli każdy krok wykonałeś poprawnie, w swoim następnym śnie, który
          nastąpi mniej więcej godzinę po drugim zaśnięciu, uzyskasz świadomość.
          Stanie się to w sposób nagły – po prostu nagle sobie o niej
          przypomnisz.
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
    backgroundColor: '#45beb8eb',
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
