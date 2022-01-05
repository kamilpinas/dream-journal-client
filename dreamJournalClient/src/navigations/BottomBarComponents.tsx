import React from 'react';
import {IconButton, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface BarLabelProps {
  color: string;
  children: string;
}

interface BarIconProps {
  color: string;
  size: number;
  icon: IconSource;
}

export const BarIcon = (props: BarIconProps) => {
  return (
    <IconButton
      color={props.color}
      size={props.size}
      icon={props.icon}
      style={{marginTop: 25}}
    />
  );
};

export const BarLabel = (props: BarLabelProps) => {
  return (
    <Text
      style={{
        fontSize: 10,
        lineHeight: 30,
        textAlign: 'center',
        color: props.color,
      }}>
      {props.children}
    </Text>
  );
};
