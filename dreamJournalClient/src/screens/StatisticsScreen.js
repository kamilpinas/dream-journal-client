import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {LineChart, PieChart, BarChart} from 'react-native-chart-kit';
import Header from '../components/Header';
import {Paragraph} from 'react-native-paper';
import instance from '../api/axios';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StatisticsScreen({navigation}) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [commonWords, setCommonWords] = useState();
  const [categoriesStats, setCategoriesStats] = useState();
  const [emotionsStats, setEmotionsStats] = useState();

  function getMostCommonWords() {
    if (loading) {
      instance
        .get('statistics/' + userData._id)
        .then(function (response) {
          setCommonWords(response.data.filter(item => item._id.length > 2));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }
  function getCategories() {
    if (loading) {
      instance
        .get('statistics/categories/' + userData._id)
        .then(function (response) {
          setCategoriesStats(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

  function getEmotions() {
    if (loading) {
      instance
        .get('statistics/emotions/' + userData._id)
        .then(function (response) {
          setEmotionsStats(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

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
      if (loading) {
        getMostCommonWords();
        getCategories();
        getEmotions();
      }
    });

    return unsubscribe;
  }, [navigation, loading]);
  return (
    <ScrollView style={{width: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <Header>Statystyki</Header>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          getEmotions();
          getCategories();
          getMostCommonWords();
        }}>
        Generuj wykresy
      </Button>
      {loading && commonWords && (
        <>
          <Paragraph style={{textAlign: 'center'}}>
            Najczęściej powtarzające się motywy w snach
          </Paragraph>

          <PieChart
            data={[
              {
                name: commonWords[0]._id || 'Brak danych',
                population: commonWords[0].count || 0,
                color: 'rgba(131, 167, 234, 1)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: commonWords[1]._id || 'Brak danych',
                population: commonWords[1].count || 0,
                color: 'rgb(148, 67, 173)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: commonWords[2]._id || 'Brak danych',
                population: commonWords[2].count || 0,
                color: '#ffffff',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: commonWords[3]._id || 'Brak danych',
                population: commonWords[3].count || 0,
                color: 'rgb(0, 0, 255)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
            ]}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute //for the absolute number remove if you want percentage
          />
        </>
      )}
      {loading && categoriesStats && (
        <>
          <Paragraph style={{textAlign: 'center'}}>
            Liczba snów w danej kategorii
          </Paragraph>
          <BarChart
            data={{
              labels: categoriesStats.map(item => item._id),
              datasets: [
                {
                  data: categoriesStats.map(item => item.count),
                },
              ],
            }}
            height={300}
            verticalLabelRotation={30}
            width={Dimensions.get('window').width - 16}
            chartConfig={{
              decimalPlaces: 0,
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            backgroundColor="transparent"
            paddingLeft="15"
            absolute //for the absolute number remove if you want percentage
          />
        </>
      )}
      {loading && emotionsStats && (
        <>
          <Paragraph style={{textAlign: 'center'}}>
            Najczęściej występujące emocje w snach
          </Paragraph>
          <LineChart
            data={{
              labels: emotionsStats.map(item => item._id),
              datasets: [
                {
                  data: emotionsStats.map(item => item.count),
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={300}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </>
      )}
    </ScrollView>
  );
}
