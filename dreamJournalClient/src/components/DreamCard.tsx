import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

interface DreamCardProps {
  title?: string;
  content?: string;
  date?: string;
  icon?: IconSource;
  size?: number;
  isShared?: boolean;
  onPress?: () => void;
  onDelete?: () => void;
  onShare?: () => void;
}

export const DreamCard = (props: DreamCardProps) => (
  <Card style={styles.card} onPress={props.onPress}>
    <View style={styles.inlineCard}>
      <View style={styles.left}>
        <Avatar.Icon
          color="#fff"
          size={35}
          icon={props.icon || 'emoticon-happy'}
        />
        <Paragraph style={{paddingLeft: 20}}>{props.title}</Paragraph>
      </View>
      <View style={{flexDirection: 'row'}}>
        <IconButton
          icon="share-variant"
          onPress={props.onShare}
          disabled={props.isShared}
        />
        <IconButton icon="delete" onPress={props.onDelete} animated />
      </View>
    </View>
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
  inlineCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
