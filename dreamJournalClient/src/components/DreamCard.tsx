import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface DreamCardProps {
  title?: string;
  content?: string;
  subtitle?: string;
  icon?: IconSource;
  size?: number;
}
const LeftContent = (props: DreamCardProps) => (
  <Avatar.Icon
    color="#fff"
    size={30}
    icon={props.icon || 'emoticon-happy-outline'}
  />
);

export const DreamCard = (props: DreamCardProps) => (
  <Card style={styles.card}>
    <Card.Title
      title={props.title}
      subtitle={props.subtitle}
      left={LeftContent}
      titleStyle={styles.cardTitle}
      subtitleStyle={styles.cardSubtitle}
    />
  </Card>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 15,
  },
  cardTitle: {
    fontSize: 16,
  },
  cardSubtitle: {
    fontSize: 12,
  },
});
