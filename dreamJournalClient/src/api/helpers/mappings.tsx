import {Item} from 'react-native-picker-select';

export const mapStringsToItems = (array: Array<string>): Array<Item> => {
  return array.map(value => {
    return {value: value, label: value};
  });
};
