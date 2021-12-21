import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Paragraph, Switch} from 'react-native-paper';
import {DreamModel} from '../models/dream';
import {SliderLevel} from './Slider';

interface ConsciousnessModalProps {
  dream: Partial<DreamModel>;
  setNewDream: (dream: Partial<DreamModel>) => void;
}
export function ConsciousnessModal(props: ConsciousnessModalProps) {
  return (
    <View style={styles.scene}>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był świadomy?</Paragraph>
        <Switch
          value={props.dream.analysis?.consciousness?.isConsciousness || false}
          onValueChange={value =>
            props.setNewDream({
              ...props.dream,
              analysis: {
                ...props.dream.analysis,
                consciousness: {
                  ...props.dream.analysis?.consciousness,
                  isConsciousness: value,
                },
              },
            })
          }
        />
      </View>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był kontrolowany?</Paragraph>
        <Switch
          value={props.dream.analysis?.consciousness?.isControled || false}
          onValueChange={value =>
            props.setNewDream({
              ...props.dream,
              analysis: {
                ...props.dream.analysis,
                consciousness: {
                  ...props.dream.analysis?.consciousness,
                  isControled: value,
                },
              },
            })
          }
        />
      </View>
      <SliderLevel
        min={0}
        max={5}
        value={props.dream.analysis?.consciousness?.lucidityLevel || 0}
        step={1}
        onChange={(value: number) =>
          props.setNewDream({
            ...props.dream,
            analysis: {
              ...props.dream.analysis,
              consciousness: {
                ...props.dream.analysis?.consciousness,
                lucidityLevel: value,
              },
            },
          })
        }
        label={'Poziom świadomości'}
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
