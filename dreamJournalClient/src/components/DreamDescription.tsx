import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput from './TextInput';
import DatePicker from 'react-native-date-picker';
import {IconButton, Paragraph} from 'react-native-paper';
import {theme} from '../core/theme';
import moment from 'moment';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {instance} from '../api/axios';
import {mapStringsToItems} from '../api/helpers/mappings';
import {DreamModel} from '../models/dream';

interface DreamDescriptionProps {
  dream: Partial<DreamModel>;
  setNewDream: (dream: Partial<DreamModel>) => void;
}

export function DreamDescriptio(props: DreamDescriptionProps) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [categories, setCategories] = useState<Array<Item>>([]);
  console.log('dream desc');
  function getCategories() {
    instance
      .get('categories')
      .then(function (response) {
        setCategories(
          mapStringsToItems(
            response.data.docs.map((item: {name: any}) => item.name),
          ),
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getCategories();
    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <View style={styles.scene}>
      <TextInput
        label="Tytuł"
        returnKeyType="next"
        value={props.dream.title}
        onChangeText={(text: string) =>
          props.setNewDream({...props.dream, title: text})
        }
        autoCapitalize="none"
      />
      <View style={styles.dateIcons}>
        <Paragraph>Czas zaśnięcia </Paragraph>
        <Paragraph>
          {moment(props.dream.startDate).format('YYYY-MM-DD HH:mm')}
        </Paragraph>
        <IconButton
          onPress={() => setOpen(true)}
          icon="calendar"
          size={30}
          color={theme.colors.primary}
        />
      </View>

      <View style={styles.dateIcons}>
        <Paragraph>Czas obudzenia</Paragraph>
        <Paragraph>
          {moment(props.dream.endDate).format('YYYY-MM-DD HH:mm')}
        </Paragraph>
        <IconButton
          onPress={() => setOpen2(true)}
          icon="calendar"
          size={30}
          color={theme.colors.primary}
        />
      </View>

      <TextInput
        label="Treść"
        returnKeyType="next"
        value={props.dream.description}
        onChangeText={(text: string) =>
          props.setNewDream({...props.dream, description: text})
        }
        autoCapitalize="none"
        multiline={true}
        numberOfLines={10}
        errorText={undefined}
        description={undefined}
      />
      <RNPickerSelect
        key={props.dream.category?.name}
        placeholder={{value: 'Wybierz kategorie'}}
        value={props.dream.category?.name}
        onValueChange={text =>
          props.setNewDream({...props.dream, category: {name: text}})
        }
        items={categories}
      />
      <DatePicker
        modal
        open={open}
        date={props.dream.startDate || new Date()}
        androidVariant="iosClone"
        title="Sen rozpoczął się.."
        textColor={theme.colors.primary}
        locale={'pl'}
        confirmText="Zatwierdź"
        cancelText="Anuluj"
        is24hourSource="locale"
        onConfirm={date => {
          setOpen(false);
          props.setNewDream({...props.dream, startDate: date});
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <DatePicker
        modal
        open={open2}
        date={props.dream.endDate || new Date()}
        androidVariant="iosClone"
        title="Sen zakończył się.."
        textColor={theme.colors.primary}
        locale={'pl'}
        confirmText="Zatwierdź"
        cancelText="Anuluj"
        is24hourSource="locale"
        onConfirm={date => {
          setOpen2(false);
          props.setNewDream({...props.dream, endDate: date});
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 30,
  },
  dateIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export const DreamDescription = React.memo(DreamDescriptio);
