import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Paragraph from '../../components/Paragraph';
import {IconButton, Title} from 'react-native-paper';
import {theme} from '../../core/theme';
export function DreamJournal({navigation}) {
  return (
    <ScrollView>
      <IconButton icon="arrow-left" size={30} onPress={navigation.goBack} />
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/journall.png')}
          style={styles.image}
        />
      </View>
      <View style={{padding: 20}}>
        <Title style={styles.title}>PODSTAWY</Title>
        <Paragraph style={styles.subtitle}>Dziennik snów</Paragraph>
        <Paragraph>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </Paragraph>

        <Paragraph style={styles.subtitle}>Jakie to uczucie?</Paragraph>

        <Paragraph>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </Paragraph>

        <Paragraph style={styles.subtitle}>Jakie to uczucie?</Paragraph>

        <Paragraph>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum
        </Paragraph>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    paddingVertical: 30,
    position: 'relative',
    backgroundColor: '#c4ae34',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: theme.fontSizes.secondary,
    fontWeight: 'normal',
  },
  subtitle: {
    paddingVertical: 10,
    fontSize: theme.fontSizes.primary,
    fontWeight: 'bold',
  },
});
