import * as React from 'react';
import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import {theme} from '../core/theme';

interface TechnicsCardProps {
  title?: string;
  subtitle?: string;
  imgSource: ImageSourcePropType;
}

export const TechnicsCard = (props: TechnicsCardProps) => (
  <View style={styles.technicsContainer}>
    <Card style={styles.technicsCard}>
      <Card.Cover style={{height: 100}} source={props.imgSource} />
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
    fontSize: theme.fontSizes.primary,
    color: theme.colors.white,
    marginTop: -30,
  },
  subtitle: {
    fontSize: theme.fontSizes.secondary,
  },
});
