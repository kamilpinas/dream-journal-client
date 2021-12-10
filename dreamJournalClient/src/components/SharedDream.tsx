import * as React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {IconButton, Paragraph, Title} from 'react-native-paper';
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
    <ImageBackground
      source={require('../assets/sharedDreamBackground.png')}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.insideImage}>
        <Paragraph style={{marginTop: 50, textAlign: 'right'}}>
          {props.sharedOn}
        </Paragraph>
        <Title style={styles.title}>{props.title}</Title>
        <Paragraph style={styles.text} ellipsizeMode="tail" numberOfLines={20}>
          {props.content}
        </Paragraph>
        <Paragraph
          style={{marginTop: 12, textAlign: 'right', fontStyle: 'italic'}}>
          {props.user}
        </Paragraph>
        <View style={styles.grades}>
          <IconButton icon="thumb-down" size={40} color={theme.colors.error} />
          <Paragraph>({props.votes})</Paragraph>
          <IconButton icon="thumb-up" size={40} color={theme.colors.success} />
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  text: {fontSize: 12},
  grades: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {justifyContent: 'center', alignContent: 'center'},
  insideImage: {
    margin: 60,
    height: '100%',
  },
});
