import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import {UserCard} from '../components/UserCard';
import BackButton from '../components/BackButton';
import instance from '../api/axios';
import {Searchbar} from 'react-native-paper';
import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {theme} from '../core/theme';

export function ManageUsersScreen({navigation, route}) {
  const [users, setUsers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const searchFilterFunction = text => {
    if (text) {
      const newData = users.filter(function (item) {
        const itemData = item.email
          ? item.email.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearchQuery(text);
    } else {
      setFilteredData(users);
      setSearchQuery(text);
    }
  };
  function deleteUser(id) {
    instance
      .delete('/users/' + id)
      .then(function (response) {
        getUsers();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getUsers() {
    instance
      .get('users')
      .then(function (response) {
        setUsers(response.data.docs);
        setFilteredData(response.data.docs);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function verifyUser(id) {
    instance
      .get('auth/verify/' + id)
      .then(function (response) {
        getUsers();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <SafeAreaView>
      <Header style={styles.header}>Zarządzaj użytkownikami</Header>
      <BackButton goBack={navigation.goBack} />
      <ScrollView style={styles.scrollView}>
        <Searchbar
          placeholder="Szukaj"
          onChangeText={value => searchFilterFunction(value)}
          value={searchQuery}
          style={{marginTop: 20}}
        />

        {filteredData.map(item => (
          <UserCard
            key={item._id}
            email={item.email}
            name={item.name}
            onDelete={() => deleteUser(item._id)}
            verified={item.verified}
            role={item.role}
            onVerify={() => verifyUser(item.verification)}
          />
        ))}
      </ScrollView>
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
    marginVertical: 20,
    textAlign: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
