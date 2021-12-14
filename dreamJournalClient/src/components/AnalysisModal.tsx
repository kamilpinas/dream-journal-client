import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './Button';
import {Paragraph} from 'react-native-paper';

import Slider from '@react-native-community/slider';
import {theme} from '../core/theme';

interface AnalysisModalProps {}

export function AnalysisModal() {
  const [sleepLevel, setSleepLevel] = useState(0);
  const [rating, setRating] = useState(0);
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <View style={styles.scene}>
      <Paragraph style={{textAlign: 'center'}}>{sleepLevel} </Paragraph>
      <Slider
        style={{width: '100%', height: 70}}
        thumbTintColor={theme.colors.primary}
        minimumValue={0}
        maximumValue={5}
        value={sleepLevel}
        thumbImage={require('../assets/sliderIcon.png')}
        step={1}
        onValueChange={value => setSleepLevel(value)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Paragraph style={{textAlign: 'center'}}>{sleepLevel} </Paragraph>
      <Slider
        style={{width: '100%', height: 40}}
        thumbTintColor={theme.colors.primary}
        minimumValue={0}
        maximumValue={5}
        value={rating}
        thumbImage={require('../assets/sliderIcon.png')}
        step={1}
        onValueChange={value => setRating(value)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Button mode="contained">Dalej</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 30,
  },
  dateIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
