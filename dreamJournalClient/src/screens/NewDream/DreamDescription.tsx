import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput from '../../components/TextInput';
import DatePicker from 'react-native-date-picker';
import {IconButton, Modal, Paragraph, Portal} from 'react-native-paper';
import {theme} from '../../core/theme';
import moment from 'moment';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import instance from '../../api/axios';
import {mapStringsToItems} from '../../api/helpers/mappings';
import {DreamModel} from '../../models/dream';
import Header from '../../components/Header';
import Button from '../../components/Button';

interface DreamDescriptionProps {
  dream: Partial<DreamModel>;
  setNewDream: (dream: Partial<DreamModel>) => void;
}

export function DreamDescriptio(props: DreamDescriptionProps) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [categories, setCategories] = useState<Array<Item>>([]);
  const [visible, setVisible] = React.useState(false);
  const [newCategory, setNewCategory] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

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

  function createCategory() {
    instance
      .post('categories', {
        name: newCategory,
      })
      .then(async function (response) {
        getCategories();
        hideModal();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteCategory(name) {
    instance
      .delete('/categories/' + name)
      .then(function (response) {
        getCategories();
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
    <>
      <View style={{alignItems: 'center'}}>
        <Header>Opis snu</Header>
      </View>
      <View style={styles.scene}>
        <TextInput
          label="Tytuł"
          returnKeyType="next"
          value={props.dream.title}
          onChangeText={(text: string) =>
            props.setNewDream({...props.dream, title: text})
          }
          autoCapitalize="none"
          errorText={undefined}
          description={undefined}
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
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <View style={{width: '70%'}}>
            <RNPickerSelect
              key={props.dream.category?.name}
              placeholder={{value: '', label: 'Wybierz kategorie..'}}
              value={props.dream.category?.name}
              onValueChange={text =>
                props.setNewDream({...props.dream, category: {name: text}})
              }
              items={categories}
            />
          </View>
          <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
            <IconButton icon={'plus'} onPress={showModal} />
            <IconButton
              icon={'minus'}
              onPress={() => deleteCategory(props.dream.category?._id)}
            />
          </View>
        </View>
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
        <Portal>
          <Modal visible={visible} onDismiss={hideModal}>
            <View style={{backgroundColor: 'white', margin: 15, padding: 30}}>
              <TextInput
                label="Nazwa kategorii"
                returnKeyType="next"
                value={newCategory}
                onChangeText={text => setNewCategory(text)}
                autoCapitalize="none"
              />
              <Button mode="contained" onPress={createCategory}>
                Dodaj kategorie
              </Button>
            </View>
          </Modal>
        </Portal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 50,
  },
  dateIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export const DreamDescription = React.memo(DreamDescriptio);
