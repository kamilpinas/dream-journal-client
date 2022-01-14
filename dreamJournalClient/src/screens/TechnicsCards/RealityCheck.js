import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import {IconButton, Title} from 'react-native-paper';
import {theme} from '../../core/theme';
import Button from '../../components/Button';
export function RealityCheck({navigation}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/happy.png')}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>PODSTAWY</Title>
        <Paragraph style={styles.subtitle}>Testy rzeczywistości</Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          RC (Reality Check), RT (Reality Test) bądź TR (Test Rzeczywistości) -
          czynność pozwalająca uzyskać nam świadomość we śnie. Pożądane jest,
          aby osoba pragnąca świadomie śnić wykonywała TR za każdym razem, gdy
          ujrzy swój znak senny w rzeczywistości. Gdy już zrobimy sobie taki
          nawyk będziemy za każdym razem robili TR we śnie, gdy zobaczymy swój
          znak senny.
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Notifications')}>
          Ustaw testy rzeczywistości
        </Button>

        <Paragraph style={styles.subtitle}>
          Rodzaje testów rzeczywistości
        </Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          Poniżej podano różne rodzaje testów rzeczywistości. Ocenę danego testu
          uporządkowano w skali od 1 do 6. Im wyższa ocena, tym lepszy test.
          {'\n'}
          {'\n'}
          Oddychanie z zatkanym nosem (5) - Gdy jesteśmy we śnie, zatykamy nos i
          próbujemy przez niego oddychać. Oczywistością jest, że w realnym życiu
          by się nam to nie udało. Jednak gdy we śnie poruszymy ręką, nasza
          realna ręka się nie poruszy, więc nie zatka nosa i będziemy mogli
          oddychać w ten sposób.{'\n'}
          {'\n'}
          Oddychanie pod wodą (5) - Jeśli pływasz, sprawdź czy możesz oddychać
          pod wodą, jeśli tak - jesteś we śnie.
          {'\n'}
          {'\n'}
          Patrzenie na swoje dłonie (4) - Gdy jesteśmy we śnie ręce nigdy nie
          układają się w naturalny sposób. Gdy na nie spojrzymy tworzą
          nieregularne kształty.
          {'\n'}
          {'\n'}
          Czytanie (4) - Gdy we śnie coś przeczytamy i się odwrócimy, w tym
          samym miejscu będą znajdowały się inne litery, słowa bądź zdania.
          {'\n'}
          {'\n'}Sprawdzanie godziny (4) - Tu sytuacja jest podobna jak z
          czytaniem. Kiedy spojrzymy dwa razy na zegarek, będzie wskazywał inną
          godzinę.
          {'\n'}
          {'\n'}
          Bieganie (4) - Gdy we śnie biegniemy, czujemy jakby na naszych nogach
          były zawieszone ciężarki. Nie możemy biec w pełni naszych możliwości.
          {'\n'}
          {'\n'}
          Podskakiwanie (4) - Jeśli podskakujesz, sprawdź jak wysoko i jak
          powoli opadasz.
          {'\n'}
          {'\n'}
          Magia (4) - Sprawdź, czy możesz przejść przez ścianę, lustro lub okno.
          Popatrz, czy możesz latać lub wytwórz kulę energii.
          {'\n'}
          {'\n'}
          Światło (3) - Sprawdź, czy włącznik światła działa. {'\n'}
          {'\n'}
          Pamięć (3) - Sprawdź, czy pamiętasz jak się znalazłeś w danym miejscu,
          co robiłeś 5 minut temu lub nawet godzinę.
        </Paragraph>

        <Paragraph style={styles.subtitle}>Znak senny</Paragraph>

        <Paragraph style={{textAlign: 'left'}}>
          Znaki senne to obiekty, które często pojawiają się w naszych snach.
          Znakiem sennym może być: przedmiot, roślina, osoba, miejsce, zjawisko,
          zdarzenie, kolor, zwierzę, dźwięk i wiele więcej. Przykład: kolejny
          raz widzę w moim śnie jednorożca. To zapewne mój znak senny. Czasem są
          powiązane z naszymi zainteresowaniami. Jeśli uwielbiamy wilki, zapewne
          zostaną naszym znakiem sennym. Dlaczego? Sny odzwierciedlają m.in.
          obiekty naszych myśli i zainteresowań. Nie, nie każdy ma znak senny.
          Wielu profesjonalistów po wielu miesiącach poszukiwań swojego znaku
          sennego, musiało pogodzić się z porażką. Nie należy poddawać się po
          kilku próbach i nadal szczegółowo badać sny. Znaki senne mogą pojawić
          się dopiero w określonych etapach życia, dlatego czas szukania nie
          zawsze jest jasno określony. Jednak nie poddawaj się! Dużo osób ma coś
          charakterystycznego i unikalnego w snach, coś co można nazwać znakiem
          sennym. Posiadanie znaku sennego nie jest oczywiście bezcelowe. Mocno
          związane jest ze świadomym śnieniem. Gdy rozpoznamy w śnie nasz znak
          senny, pozwoli nam uświadomić się– inaczej doświadczyć świadomego snu.
          Od razu skojarzymy sobie, że ten obiekt pojawia się zwłaszcza w snach.
          Na tym polega cała sztuka świadomego śnienia - zorientować się, iż
          śnimy. Potem losy snu są tylko w naszych rękach!
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
    backgroundColor: '#3bb64bee',
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
