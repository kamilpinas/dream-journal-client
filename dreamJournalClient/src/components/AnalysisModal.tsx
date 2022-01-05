import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Switch} from 'react-native-paper';
import {SliderLevel} from './Slider';
import iconSet from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {AnalysisModel} from '../models/analysis';
import {theme} from '../core/theme';
import instance from '../api/axios';
//import {mapEmotionsToEmotionItems} from '../api/helpers/mappings';
import _ from 'lodash';
import {groupBy, mapToApiEmotions} from '../api/helpers/mappings';
interface AnalysisModalProps {
  analysis?: AnalysisModel;
  setNewAnalysis: (dream: Partial<AnalysisModel>) => void;
}

export interface EmotionItem {
  type: string;
  id?: number;
  children: Array<{name: string}>;
}

export function AnalysisModa(props: AnalysisModalProps) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState<Array<EmotionItem>>([]);
  function getEmotions() {
    instance
      .get('emotions')
      .then(function (response) {
        const grouped = groupBy(response.data.docs, 'type').map(item => ({
          ...item,
          children: groupBy(item.children, 'name'),
        }));
        console.log('MAPPING', grouped);
        setItems(grouped);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getEmotions();
    return () => {
      setItems([]);
    };
  }, []);
  console.log('MAPOWANIE JEBANE!', mapToApiEmotions(items, selectedItems));
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
        IconRenderer={iconSet}
        items={items}
        uniqueKey="name"
        subKey="children"
        displayKey="name"
        selectText="Wybierz emocje..."
        selectedText="wybranych"
        confirmText="Zapisz"
        searchPlaceholderText="Szukaj.."
        showDropDowns={true}
        readOnlyHeadings={true}
        onSelectedItemsChange={array => {
          setSelectedItems(array);
        }}
        selectedItems={selectedItems}
        onConfirm={() => {
          props.setNewAnalysis({
            ...props.analysis,
            emotions: mapToApiEmotions(items, selectedItems),
          });
        }}
        colors={{primary: theme.colors.primary, text: theme.colors.primary}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 50,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export const AnalysisModal = React.memo(AnalysisModa);
