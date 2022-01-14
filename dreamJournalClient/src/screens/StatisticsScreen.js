import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {LineChart, PieChart, ProgressChart} from 'react-native-chart-kit';
import Header from '../components/Header';
import {Paragraph} from 'react-native-paper';

export default function StatisticsScreen() {
  return (
    <ScrollView style={{width: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <Header>Statystyki</Header>
      </View>
      <Paragraph style={{textAlign: 'center'}}>
        Najczęściej występujące emocje podczas snu
      </Paragraph>
      <PieChart
        data={[
          {
            name: 'Śmiech',
            population: 21,
            color: 'rgba(131, 167, 234, 1)',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Zauroczenie',
            population: 28,
            color: '#F00',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Strach',
            population: 85,
            color: '#ffffff',
            legendFontColor: '#7F7F7F',
            legendFontSize: 12,
          },
          {
            name: 'Złość',
            population: 11,
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
          decimalPlaces: 2,
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
      <Paragraph style={{textAlign: 'center'}}>
        Średnia liczba godzin snu w miesiącu
      </Paragraph>
      <LineChart
        data={{
          labels: ['Styczeń', 'Luty', 'Marzec'],
          datasets: [
            {
              data: [
                Math.floor(Math.random() * 6) + 5,
                Math.floor(Math.random() * 6) + 5,
                Math.floor(Math.random() * 6) + 5,
                Math.floor(Math.random() * 6) + 5,
                Math.floor(Math.random() * 6) + 5,
                Math.floor(Math.random() * 6) + 5,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={250}
        yAxisLabel={'[h] '}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingLeft: 25,
        }}
      />
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </ScrollView>
  );
}
