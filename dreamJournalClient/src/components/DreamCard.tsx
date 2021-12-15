import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface DreamCardProps {
  title?: string;
  content?: string;
  date?: string;
  icon?: IconSource;
  size?: number;
  onPress?: () => void;
}
const LeftContent = (props: DreamCardProps) => (
  <Avatar.Icon
    color="#fff"
    size={30}
    icon={props.icon || 'emoticon-happy-outline'}
  />
);

export const DreamCard = (props: DreamCardProps) => (
  <Card style={styles.card} onPress={props.onPress}>
    <Card.Title
      title={props.title}
      subtitle={props.date}
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
