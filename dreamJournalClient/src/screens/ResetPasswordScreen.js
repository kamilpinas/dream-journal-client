import React, {useState} from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import instance from '../api/axios';
import {emailValidator} from '../helpers/emailValidator';

export default function ResetPasswordScreen({navigation}) {
  const [email, setEmail] = useState({value: '', error: ''});

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }
    resetPassword();
  };

  async function resetPassword() {
    try {
      const response = await instance.post('auth/forgot', {
        email: email.value,
      });
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    } catch (err) {
      if (err.response.status === 404) {
        setEmail({
          ...email,
          error: 'Użytkownik o podanym adresie e-mail nie istnieje',
        });
      }
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Odzyskiwanie hasła</Header>
      <TextInput
        label="Email"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Otrzymasz wiadomość na podany adres, z linkiem do zresetowania hasła."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{marginTop: 16}}>
        Zresetuj hasło
      </Button>
    </Background>
  );
}
