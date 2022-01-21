import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import instance from '../api/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    loginUser();
  };

  async function loginUser() {
    try {
      const response = await instance.post('auth/login', {
        email: email.value,
        password: password.value,
      });
      {
        if (response.data.user.verified) {
          await AsyncStorage.setItem('token', response.data.token);
          await AsyncStorage.setItem(
            'user',
            JSON.stringify(response.data.user),
          );
          //TODO dodac warunek jesli konto nie jest zweryfikowane
          navigation.reset({
            index: 0,
            routes: [{name: 'Dashboard'}],
          });
        } else {
          setEmail({...email, error: 'Konto nie zweryfikowane'});
        }
      }
    } catch (err) {
      if (err.response.status === 404) {
        setEmail({
          ...email,
          error: 'Użytkownik o podanym adresie e-mail nie istnieje',
        });
      }
      if (err.response.status === 409) {
        setPassword({...password, error: 'Podane hasło jest nieprawidłowe'});
      }
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Witaj ponownie.</Header>
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
      <TextInput
        label="Hasło"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onLoginPressed}>
        Zaloguj się
      </Button>
      <View style={styles.row}>
        <Text>Nie posiadasz konta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Zarejestruj się</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
