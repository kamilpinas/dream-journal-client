import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface LegendProps {
  name: string;
  color: string;
}

export function Legend(props: LegendProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.colorContainer, {backgroundColor: props.color}]} />
      <View style={styles.textContainer}>
        <Text>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorContainer: {
    width: 10,
    height: 10,
  },
  textContainer: {
    paddingLeft: 8,
  },
});
