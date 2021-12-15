import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph} from 'react-native-paper';
import Slider from '@react-native-community/slider';
import {theme} from '../core/theme';

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  label: string;
  onChange: (value: number) => void;
}

export function SliderLevel(props: SliderProps) {
  return (
    <View>
      <View style={styles.sliderText}>
        <Paragraph>{props.label}</Paragraph>
        <Paragraph>{props.value} </Paragraph>
      </View>
      <Slider
        style={{width: '100%', height: 80}}
        thumbTintColor={theme.colors.primary}
        minimumValue={props.min}
        maximumValue={props.max}
        value={props.value}
        thumbImage={require('../assets/sliderIcon.png')}
        step={props.step}
        onValueChange={props.onChange}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    fontSize: theme.fontSizes.primary,
  },
});
