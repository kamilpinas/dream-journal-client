import * as React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {theme} from '../core/theme';

interface TechnicsCardProps {
  imgSource: ImageSourcePropType;
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  onPress?: () => void;
}

export const TechnicsCard = (props: TechnicsCardProps) => (
  <View style={styles.technicsContainer}>
    <Card style={styles.technicsCard} onPress={props.onPress} mode="outlined">
      <Card.Cover
        style={{
          width: '100%',
          padding: 20,
          alignSelf: 'center',
          backgroundColor: props.backgroundColor,
        }}
        source={props.imgSource}
      />
      <Card.Content>
        <Title style={styles.title}>{props.title}</Title>
        <Paragraph style={styles.subtitle}>{props.subtitle}</Paragraph>
      </Card.Content>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  technicsContainer: {
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 15,
    alignItems: 'center',
  },
  technicsCard: {
    width: '90%',
  },
  title: {
    fontSize: theme.fontSizes.secondary,
    color: theme.colors.white,
    fontWeight: 'normal',
    marginTop: -30,
  },
  subtitle: {
    fontSize: theme.fontSizes.primary,
    marginTop: 10,
    fontWeight: '900',
  },
});
