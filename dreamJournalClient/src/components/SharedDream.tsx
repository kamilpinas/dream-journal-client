import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {theme} from '../core/theme';

interface SharedDreamCardProps {
  title?: string;
  subtitle?: string;
  icon?: IconSource;
  content?: string;
  user: string;
  sharedOn: string;
  votes?: number;
}
export const SharedDreamCard = (props: SharedDreamCardProps) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Content>
        <Paragraph>{props.sharedOn}</Paragraph>
        <Title style={styles.title}>{props.title}</Title>
        <Paragraph>{props.content}</Paragraph>
        <Paragraph style={{marginTop: 12, textAlign: 'right'}}>
          {props.user}
        </Paragraph>
        <View style={styles.grades}>
          <IconButton
            icon="emoticon-sad-outline"
            style={styles.button}
            size={50}
            color={theme.colors.error}
          />
          <Paragraph>({props.votes})</Paragraph>
          <IconButton
            icon="emoticon-happy-outline"
            style={styles.button}
            size={50}
            color={theme.colors.success}
          />
        </View>
      </Card.Content>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 15,
    marginBottom: -20,
  },
  title: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  button: {},
  grades: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
  container: {justifyContent: 'center', alignContent: 'center'},
});
