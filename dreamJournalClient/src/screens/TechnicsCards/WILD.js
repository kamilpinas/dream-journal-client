import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import {IconButton, Title} from 'react-native-paper';
import {theme} from '../../core/theme';
export function WILD({navigation}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/wake-up.png')}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>WYPRÓBUJ TECHNIKI</Title>
        <Paragraph style={styles.subtitle}>WILD - (Wake Induced Lucid Dream)</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          WILD (Wake Induced Lucid Dream) - bezpośrednie wejście do fazy REM bez
          utraty świadomości. Technika ma na celu przełamanie nawyku
          nieświadomego zasypiania. Przy korzystaniu z techniki można
          doświadczyć hipnagogi.
          {'\n'}
          {'\n'}
          Hipnagogi to zjawisko fizjologiczne pojawiające się podczass
          zasypiania charakteryzujące się występowaniem wyrazistych wyobrażeń.
          Wyobrażenia te mogą być wzrokowe, słuchowe lub kinestetyczne; często
          dotyczą sytuacji z minionego dnia i mogą przejść w zwykłe marzenia
          senne
        </Paragraph>

        <Paragraph style={styles.subtitle}>Opis techniki</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          Na szczęście WILD jest jednak łatwy. Można opisać go w pięciu krokach:
          {'\n'}
          {'\n'}1. Sen przed,
          {'\n'}2. Wstanie na chwilę,
          {'\n'}3. Uspokojenie ciała/umysłu,
          {'\n'}4. Użycie kotwicy,
          {'\n'}5. Uśnięcie
          {'\n'}
          {'\n'}
          "Usnąć!? Ale ja myślałem, że próbuję świadomie wejść w sen!?" Tu
          właśnie pojawia się użycie kotwicy{'\n'}
          {'\n'}Kotwica, jest to coś co pozwala Ci pasywnie "utrzymać drogę"
          wtedy, gdy twój umysł mniej lub bardziej błądzi myślami. Jest to
          swoista lina, która utrzymuje tę logicznie myślącą część mózgu, w
          czasie gdy odpływasz w senny świat.{'\n'}
          {'\n'}Zauważ, że jest to ekstremalnie pasywna metoda WILD. To
          najkrótsza możliwa droga. Jeśli masz w głowie zadanie np. "SKUPIAJ SIĘ
          NA ODDECHU" i to dominuje w twoim umyśle, wtedy zwykle będziesz
          potrzebował bardzo, bardzo długiego czasu by usnąć. Używając metody
          kotwicy, jednak utrzymujesz z dala część świadomości by szybko wejść w
          sen. Mógłbyś dosłownie w minutę mieć WILD, gdybyś opanował kotwicę.
          {'\n'}
          {'\n'}Jaka jest najlepsza kotwica jaką do tej pory odkryłem? Ból. Jest
          to tak łatwe jak ustawienie nóg w nieco nieprzyjemnej pozycji, która
          sprawia dyskomfort. Albo włożenie ręki pod siebie (np. leżąc na
          plecach - pod plecy). Ból działa najlepiej, ponieważ jest jednym z
          podstawowych uczyć. To najłatwiej utrzymuje Cię świadomego, gdy powoli
          odpływasz.{'\n'}
          {'\n'}
        </Paragraph>

        <Paragraph style={styles.subtitle}>1. Sen przed</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          WILD wymaga byś był w stanie szybko zasnąć, najlepiej byś był
          zmęczony, a jeszcze lepiej gdybyś był blisko fazy REM snu.{'\n'}
          Prześpij jedną albo kilka faz REM zanim obudzisz się do WILD. Typowo
          od 3 do 8 godzin snu przed. Ja często śpię 6h. Użyj metody prób i
          błędów. Każdy jest inny.
        </Paragraph>
        <Paragraph style={styles.subtitle}>2. Wstań na chwilę</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          Jeśli po prostu się obudzisz, wyłączysz budzik, przekręcisz się na
          drugi bok i spróbujesz WILD'a - najprawdopodobniej odpłyniesz w sen
          nieświadomie. Niektórzy tylko przez chwilę leża w ciemności, po czym
          próbują WILD'a i im się udaje. Większości jednak będzie zbyt senna i
          polegną. Wyjdź z łóżka, jeśli jesteś mocno senny włącz światło,
          skorzystaj z łazienki, napij się wody itp. Ja zwykle robię serię
          testów rzeczywistości co pozwala obudzić logiczne myślenie.{'\n'}
          {'\n'}
          Często siedzę sobie po turecku na łóżku i robię RC albo oglądam
          ciemność pod powiekami. Gdy czuję strach przed próbą WILD (np. jestem
          obudzony po koszmarze sennym). wtedy oglądam w myślach spokojne i
          piękne obrazy, które sobie wymyślam.{'\n'}
          {'\n'}
          Zasadniczo nie powinieneś zbyt dużo myśleć w tej fazie. Nie włączaj
          komputera, nie otwieraj książki. Musisz być w stanie szybko i łatwo
          ponownie usnąć w czasie próby WILD (ale znowu nie chcesz nagle
          odpłynąć).{'\n'}
          {'\n'}
          Po chwili, gdy czujesz, że nie jesteś zbyt senny (usiadłbyś za
          kierownicą samochodu ryzykując, że możesz nagle usnąć?) ani zbyt
          rozbudzony, połóż się spać. Możesz być na nogach tylko 5 sekund a
          nawet i 15 minut. Każdy jest inny. Użyj metody prób i błędów.
        </Paragraph>
        <Paragraph style={styles.subtitle}>3. Zrelaksuj się</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          Teraz musisz się odprężyć. To służy temu, by powstrzymać Cię od
          odpływania i daje Ci czas na oczyszczenie umysłu z poprzednich
          wskazówek dotyczących WILD'a. Zasada jest taka, że musisz najmniej jak
          to możliwe myśleć o nadchodzącym śnie, odkąd wstałeś do czasu
          właściwej już pobudki rano. Chyba nie chcesz wpaść w pułapkę czekania
          na coś co ma się zdarzyć. Po prostu rozluźnij się jak najbardziej
          pasywnie.{'\n'}
          {'\n'}Ja często relaksuje moje ciało po kolei częściami. Na przykład
          zaczynam od nóg, relaksując je trochę podczas każdego wydechu,
          następnie kolejne części ciała jak tułów, ręce itd. Rób to naturalnie.
          Nie myśl w ten sposób "Dobra, teraz rozluźnię prawą nogę w 10
          wydechów, potem lewą w 12 wydechów!" itp. {'\n'}Twoje ciało i tak
          zapewne jest już w miarę zrelaksowane, kiedy budzisz się nocą. Możesz
          oczywiście zastosować inną znaną Ci technikę relaksacyjną, grunt to by
          chociaż troszeczkę się zrelaksować. To pozwala oczyścić umysł,
          odprężyć go i przybliża Cię do snu (przyspiesza zasypanie).{' '}
        </Paragraph>
        <Paragraph style={styles.subtitle}>4. Użycie kotwicy</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          Jeżeli wybrałeś kotwicę w formie bólu, o której wcześniej wspominałem,
          musisz właśnie teraz wywołać na sobie jakiś niewielki ból. Jeśli
          leżysz na boku, ułóż kolana w dziwnej pozycji, byś poczuł lekki
          dyskomfort (ból zwiększy się w miarę upływu czasu). Jeżeli leżysz na
          plecach, włóż rękę pod siebie, tylko nie bądź głupi i nie przesadzaj z
          tym, byś nie odciął dopływu krwi do jakiejś kończyny co może mieć
          nieprzewidywalne skutki.{'\n'}
          {'\n'}Teraz jeśli jesteś już zrelaksowany, po prostu leż (nie zapomnij
          o kotwicy) i pozwól ciału i umysłowi zasypiać tak jak każdej innej
          "normalnej" nocy. Podczas zasypiania utrzymuj w świadomości ból (nie
          jest to trudne ). Tylko nie pozwól by zdominował twoje myśli, usypiaj
          normalnie tylko po prostu zauważaj pasywnie, że coś Cie boli.{'\n'}
          {'\n'}Ból jest twoją kotwicą, która zakotwicza świadomość. Musisz
          pasywnie ją zauważać podczas, gdy będziesz powoli co raz głębiej i
          głębiej zbliżał się do snu. Raczej zamiast jak zwykle nieświadomie
          odpłynąć w sen, gdybyś próbował tego przed 3-8 godzinnym snem (tj.
          wieczorem), koniec końców niewytłumaczalnie znajdziesz się w wysoce
          świadomym śnie WILD.
        </Paragraph>
        <Paragraph style={styles.subtitle}>5. Zaśnij</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          Reasumując:{'\n'}
          {'\n'}
          WILD jest łatwy i ma 5 faz:{'\n'}
          {'\n'}
          {'\n'}1. Śpij 3-8 godzin
          {'\n'}2. Obudź się na chwilę
          {'\n'}3. Przez chwilę relaksuj się
          {'\n'}4. Zauważaj kotwicę powoli usypiając
          {'\n'}5. Zaśnij
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
    backgroundColor: '#e2407eeb',
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
