import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Switch} from 'react-native-paper';
import {SliderLevel} from './Slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {AnalysisModel} from '../models/analysis';

interface AnalysisModalProps {
  analysis?: AnalysisModel;
  setNewAnalysis: (dream: Partial<AnalysisModel>) => void;
}

interface Item {
  name: string;
  id: number;
  children: Array<{name: string; id: number}>;
}

export function AnalysisModa(props: AnalysisModalProps) {
  console.log('analysis');
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
        value={props.analysis?.sleepLevel || 0}
        step={1}
        onChange={(value: number) =>
          props.setNewAnalysis({
            ...props.analysis,
            sleepLevel: value,
          })
        }
        label={'Poziom wyspania'}
      />
      <SliderLevel
        min={0}
        max={5}
        value={props.analysis?.rating || 0}
        step={1}
        onChange={(value: number) =>
          props.setNewAnalysis({
            ...props.analysis,
            rating: value,
          })
        }
        label={'Ocena snu'}
      />
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był to koszmar?</Paragraph>
        <Switch
          value={props.analysis?.isNightmare || false}
          onValueChange={value =>
            props.setNewAnalysis({
              ...props.analysis,
              isNightmare: value,
            })
          }
        />
      </View>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy wpłynął na twoje samopoczucie?</Paragraph>
        <Switch
          value={props.analysis?.isMoodAffecting || false}
          onValueChange={value =>
            props.setNewAnalysis({
              ...props.analysis,
              isMoodAffecting: value,
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

export const AnalysisModal = React.memo(AnalysisModa);
