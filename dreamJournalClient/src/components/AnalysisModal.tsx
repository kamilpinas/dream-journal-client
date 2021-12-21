import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Switch} from 'react-native-paper';
import {SliderLevel} from './Slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {DreamModel} from '../models/dream';

interface AnalysisModalProps {
  dream: Partial<DreamModel>;
  setNewDream: (dream: Partial<DreamModel>) => void;
}

interface Item {
  name: string;
  id: number;
  children: Array<{name: string; id: number}>;
}

export function AnalysisModal(props: AnalysisModalProps) {
  console.log('analysis', props.dream);
  const [selectedItems, setSelectedItems] = useState<Array<Item>>();
  const items = [
    {
      name: 'Fruits',
      id: 0,
      children: [
        {
          name: 'Apple',
          id: 10,
        },
        {
          name: 'Strawberry',
          id: 17,
        },
        {
          name: 'Pineapple',
          id: 13,
        },
        {
          name: 'Banana',
          id: 14,
        },
        {
          name: 'Watermelon',
          id: 15,
        },
        {
          name: 'Kiwi fruit',
          id: 16,
        },
      ],
    },
  ];

  return (
    <View style={styles.scene}>
      <SliderLevel
        min={0}
        max={5}
        value={props.dream.analysis?.sleepLevel || 0}
        step={1}
        onChange={(value: number) =>
          props.setNewDream({
            ...props.dream,
            analysis: {...props.dream.analysis, sleepLevel: value},
          })
        }
        label={'Poziom wyspania'}
      />
      <SliderLevel
        min={0}
        max={5}
        value={props.dream.analysis?.rating || 0}
        step={1}
        onChange={(value: number) =>
          props.setNewDream({
            ...props.dream,
            analysis: {...props.dream.analysis, rating: value},
          })
        }
        label={'Ocena snu'}
      />
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był to koszmar?</Paragraph>
        <Switch
          value={props.dream.analysis?.isNightmare || false}
          onValueChange={value =>
            props.setNewDream({
              ...props.dream,
              analysis: {...props.dream.analysis, isNightmare: value},
            })
          }
        />
      </View>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy wpłynął na twoje samopoczucie?</Paragraph>
        <Switch
          value={props.dream.analysis?.isMoodAffecting || false}
          onValueChange={value =>
            props.setNewDream({
              ...props.dream,
              analysis: {...props.dream.analysis, isMoodAffecting: value},
            })
          }
        />
      </View>
      <SectionedMultiSelect
        IconRenderer={Icon}
        items={items}
        uniqueKey="id"
        subKey="children"
        selectText="Choose some things..."
        showDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={array => setSelectedItems(array)}
        selectedItems={selectedItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
