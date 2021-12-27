import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Paragraph, Switch} from 'react-native-paper';
import {ConsciousnessModel} from '../models/consciousness';
import {SliderLevel} from './Slider';

interface ConsciousnessModalProps {
  consciousness?: ConsciousnessModel;
  setNewConsciousness: (dream: Partial<ConsciousnessModel>) => void;
}
export function ConsciousnessModa(props: ConsciousnessModalProps) {
  console.log('consciouss modal');
  return (
    <View style={styles.scene}>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był świadomy?</Paragraph>
        <Switch
          value={props.consciousness?.isConsciousness || false}
          onValueChange={value =>
            props.setNewConsciousness({
              ...props.consciousness,
              isConsciousness: value,
            })
          }
        />
      </View>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był kontrolowany?</Paragraph>
        <Switch
          value={props.consciousness?.isControled || false}
          onValueChange={value =>
            props.setNewConsciousness({
              ...props.consciousness,
              isControled: value,
            })
          }
        />
      </View>
      <SliderLevel
        min={0}
        max={5}
        value={props.consciousness?.lucidityLevel || 0}
        step={1}
        onChange={(value: number) =>
          props.setNewConsciousness({
            ...props.consciousness,
            lucidityLevel: value,
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

export const ConsciousnessModal = React.memo(ConsciousnessModa);
