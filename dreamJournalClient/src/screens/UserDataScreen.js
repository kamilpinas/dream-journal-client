import React, {useState} from 'react';
import {Alert} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {nameValidator} from '../helpers/nameValidator';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import instance from '../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserDataScreen({navigation, route}) {
  const [userInfo, setUserInfo] = useState(
    route.params !== undefined ? route.params.item : {},
  );
  const [email, setEmail] = useState({value: userInfo.email, error: ''});
  const [name, setName] = useState({value: userInfo.name, error: ''});

  function updateUser(id) {
    instance
      .patch('/users/' + id, {
        name: name.value,
        email: email.value,
        role: userInfo.role,
      })
      .then(async function (response) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data));
        Alert.alert('Zaktualizowano dane !');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onUpdate = () => {
    const emailError = emailValidator(email.value);
    const nameError = nameValidator(name.value);
    if (emailError || nameError) {
      setEmail({...email, error: emailError});
      setName({...name, error: nameError});
      return;
    }
    updateUser(userInfo._id);
  };
  return (
    <Background>
      <Header>Twoje dane</Header>
      <BackButton goBack={navigation.goBack} />
      <TextInput
        label="Nazwa użytkownika"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({value: text, error: ''})}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('ResetPasswordScreen')}>
        Odzyskiwanie hasła
      </Button>
      <Button mode="contained" onPress={onUpdate}>
        Zaktualizuj
      </Button>
    </Background>
  );
}
