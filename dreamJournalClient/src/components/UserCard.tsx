import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Card, IconButton, Paragraph} from 'react-native-paper';

interface UserCardProps {
  email?: string;
  name?: string;
  role?: string;
  verified?: boolean;
  onDelete?: () => void;
  onVerify?: () => void;
}

export const UserCard = (props: UserCardProps) => (
  <Card style={styles.card}>
    <View style={styles.inlineCard}>
      <View style={styles.left}>
        <Avatar.Icon
          color="#fff"
          size={30}
          icon={props.role === 'admin' ? 'star' : 'account'}
        />
        <Paragraph style={{paddingLeft: 20}}>{props.email}</Paragraph>
      </View>
      <View style={{flexDirection: 'row'}}>
        <IconButton
          icon="account-check"
          onPress={props.onVerify}
          disabled={props.verified}
        />
        <IconButton icon="account-remove" onPress={props.onDelete} />
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
    fontSize: 14,
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
