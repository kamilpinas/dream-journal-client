import {AsyncStorage} from '@react-native-async-storage/async-storage';

export const deviceStorage = {
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async getItem(value) {
    try {
      const data = await AsyncStorage.getItem(value);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
  async removeItem(value) {
    try {
      await AsyncStorage.removeItem(value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
};
