import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import {DreamCard} from '../components/DreamCard';
import moment from 'moment';
import {theme} from '../core/theme';
import {SafeAreaView, StyleSheet, RefreshControl} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Fab} from '../components/Fab';
import {Searchbar} from 'react-native-paper';
import instance from '../api/axios';
import {categoryIcon} from '../helpers/categoryIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dreamToSharedDream} from '../helpers/dreamToSharedDream';

export const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function JournalScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [dreams, setDreams] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    getDreams();
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const searchFilterFunction = text => {
    if (text) {
      const newData = dreams.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchQuery(text);
    } else {
      setFilteredData(dreams);
      setSearchQuery(text);
    }
  };

  function getDreams() {
    instance
      .get('/dream/' + userData._id)
      .then(function (response) {
        setFilteredData(response.data);
        setDreams(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function deleteDream(id) {
    instance
      .delete('/dream/' + id)
      .then(function (response) {
        getDreams();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateIsShared(id) {
    instance
      .patch('/dream/isShared/' + id)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  function shareDream(dream) {
    instance
      .post('/shared-dreams', dreamToSharedDream(dream, userData.name))
      .then(function (response) {})
      .catch(function (error) {
        console.log(error.response);
      });
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
        getDreams();
      }
    });

    return unsubscribe;
  }, [navigation, loading]);

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header}>Dziennik</Header>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Searchbar
          placeholder="Szukaj"
          onChangeText={value => searchFilterFunction(value)}
          value={searchQuery}
        />

        {loading &&
          filteredData.map(item => {
            return (
              <DreamCard
                key={item._id}
                title={item.title}
                date={moment(item.startDate).format('YYYY-MM-DD')}
                icon={categoryIcon(item.category.name)}
                onPress={() => navigation.navigate('NewDream', {item: item})}
                onDelete={() => deleteDream(item._id)}
                isShared={item.isShared}
                onShare={() => {
                  shareDream(item);
                  updateIsShared(item._id);
                  getDreams();
                }}
              />
            );
          })}
      </ScrollView>
      <Fab label="Dodaj sen" onClick={() => navigation.navigate('NewDream')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
