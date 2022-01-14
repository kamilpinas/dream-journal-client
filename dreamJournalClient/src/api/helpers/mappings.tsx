import {Item} from 'react-native-picker-select';
import _ from 'lodash';
import {EmotionItem} from '../../screens/NewDream/AnalysisScreen';
import {EmotionModel} from '../../models/emotion';

export const mapStringsToItems = (array: Array<string>): Array<Item> => {
  return array.map(value => {
    return {value: value, label: value};
  });
};

export function groupBy(arr: any[], prop: string) {
  return Object.values(
    arr.reduce(
      (
        aggregate: {[x: string]: {children: any[]}},
        item: {[x: string]: any},
        index: any,
      ) => {
        const val = item[prop];
        if (!aggregate[val]) {
          aggregate[val] = {
            name: val,
            id: index,
            children: [],
          };
        }
        aggregate[val].children.push(item);
        return aggregate;
      },
      {},
    ),
  );
}

export function mapToApiEmotions(
  items: Array<any>,
  names: Array<string>,
): Array<EmotionModel> {
  const finalArray: Array<EmotionModel> = [];
  names.map(selectedEmotion => {
    const typ = items
      .map((item: {children: any[]; name: any}) =>
        item.children.map((child: {name: string}) => {
          if (child.name === selectedEmotion) {
            return item.name;
          }
        }),
      )
      .flat();
    const nam = items
      .map(
        (item: {children: any[]}) =>
          item.children.find(
            (child: {name: string}) => child.name === selectedEmotion,
          )?.name,
      )
      .flat();

    const obj: EmotionModel = {
      type: typ.find(item => item),
      name: nam.find(item => item),
    };
    finalArray.push(obj);
  });
  return finalArray;
}
