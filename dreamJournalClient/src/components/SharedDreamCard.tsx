import * as React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Button, IconButton, Paragraph, Title} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {theme} from '../core/theme';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import instance from '../api/axios';
import {mapStringsToItems} from '../api/helpers/mappings';
import {CategoryModel} from '../models/category';
interface SharedDreamCardProps {
  title?: string;
  subtitle?: string;
  icon?: IconSource;
  content?: string;
  user?: string;
  sharedOn?: string;
  votes?: number;
  category?: CategoryModel;
  onVoteUp: () => void;
  onVoteDown: () => void;
  onDraw: () => void;
  onCategorySelect: (category: CategoryModel) => void;
  onDelete: () => void;
}
export const SharedDreamCard = (props: SharedDreamCardProps) => {
  const [categories, setCategories] = React.useState<Array<Item>>([]);
  function getCategories() {
    instance
      .get('/categories')
      .then(function (response) {
        setCategories(mapStringsToItems(response.data.docs));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getCategories();
    return () => {
      setCategories([]);
    };
  }, []);
  return (
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
          <Paragraph
            style={styles.text}
            ellipsizeMode="tail"
            numberOfLines={18}>
            {props.content}
          </Paragraph>
          <Paragraph
            style={{marginTop: 12, textAlign: 'right', fontStyle: 'italic'}}>
            {props.user}
          </Paragraph>
          <View
            style={{
              marginTop: 'auto',
              marginBottom: 40,
            }}>
            <View style={styles.grades}>
              <IconButton
                icon="thumb-down-outline"
                size={40}
                onPress={props.onVoteDown}
                color={theme.colors.error}
              />
              <Paragraph style={styles.voteNumber}>({props.votes})</Paragraph>
              <IconButton
                icon="thumb-up-outline"
                size={40}
                onPress={props.onVoteUp}
                color={theme.colors.success}
              />
            </View>

            <RNPickerSelect
              key={props.category?.name}
              placeholder={{value: '', label: 'Wybierz kategorie..'}}
              value={props.category?.name}
              onValueChange={text => props.onCategorySelect({name: text})}
              items={categories}
            />
            <Button
              icon="dice-multiple"
              mode="outlined"
              color={theme.colors.primary}
              onPress={props.onDraw}>
              Losuj
            </Button>
            <Button
              style={{marginTop: 10}}
              icon="delete"
              mode="contained"
              color={theme.colors.primary}
              onPress={props.onDelete}>
              Usu??
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

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
  voteNumber: {
    fontSize: theme.fontSizes.primary,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
