import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({baseURL: 'http://10.0.2.2:3000/'});

instance.interceptors.request.use(async function (config) {
  const myToken = await AsyncStorage.getItem('token');
  config.headers.Authorization = myToken ? `Bearer ${myToken}` : '';
  return config;
});

export default instance;
