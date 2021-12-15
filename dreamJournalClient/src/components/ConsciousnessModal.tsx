import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Paragraph, Switch, Button} from 'react-native-paper';
import {SliderLevel} from './Slider';

export function ConsciousnessModal() {
  const [rating, setRating] = useState(0);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = useState(false);
  return (
    <View style={styles.scene}>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był świadomy?</Paragraph>
        <Switch
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
        />
      </View>
      <View style={styles.spaceBetween}>
        <Paragraph>Czy był kontrolowany?</Paragraph>
        <Switch
          value={isSwitchOn2}
          onValueChange={() => setIsSwitchOn2(!isSwitchOn2)}
        />
      </View>
      <SliderLevel
        min={0}
        max={5}
        value={rating}
        step={1}
        onChange={value => setRating(value)}
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
