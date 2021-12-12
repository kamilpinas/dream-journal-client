import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput from './TextInput';
import DatePicker from 'react-native-date-picker';
import Button from './Button';
import {IconButton, Paragraph} from 'react-native-paper';
import {theme} from '../core/theme';
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';

interface DreamDescriptionProps {}

export function DreamDescription() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.scene}>
      <TextInput
        label="Tytuł"
        returnKeyType="next"
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        autoCapitalize="none"
        errorText={undefined}
        description={undefined}
      />
      <View style={styles.dateIcons}>
        <Paragraph>Czas zaśnięcia </Paragraph>
        <IconButton
          onPress={() => setOpen(true)}
          icon="calendar"
          size={30}
          color={theme.colors.primary}
        />

        <Paragraph>{moment(startDate).format('YYYY-MM-DD HH:mm')}</Paragraph>
      </View>
      <View style={styles.dateIcons}>
        <Paragraph>Czas obudzenia</Paragraph>
        <IconButton
          onPress={() => setOpen2(true)}
          icon="calendar"
          size={30}
          color={theme.colors.primary}
        />

        <Paragraph>{moment(startDate).format('YYYY-MM-DD HH:mm')}</Paragraph>
      </View>

      <TextInput
        label="Treść"
        returnKeyType="next"
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        autoCapitalize="none"
        multiline={true}
        numberOfLines={10}
        errorText={undefined}
        description={undefined}
      />
      <RNPickerSelect
        onValueChange={(value: any) => console.log(value)}
        items={[
          {label: 'Football', value: 'football'},
          {label: 'Baseball', value: 'baseball'},
          {label: 'Hockey', value: 'hockey'},
        ]}
      />
      <Button mode="contained">Dalej</Button>
      <DatePicker
        modal
        open={open}
        date={startDate}
        androidVariant="iosClone"
        title="Sen rozpoczął się.."
        textColor={theme.colors.primary}
        locale={'pl'}
        confirmText="Zatwierdź"
        cancelText="Anuluj"
        is24hourSource="locale"
        onConfirm={date => {
          setOpen(false);
          setStartDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <DatePicker
        modal
        open={open2}
        date={endDate}
        androidVariant="iosClone"
        title="Sen zakończył się.."
        textColor={theme.colors.primary}
        locale={'pl'}
        confirmText="Zatwierdź"
        cancelText="Anuluj"
        is24hourSource="locale"
        onConfirm={date => {
          setOpen2(false);
          setEndDate(date);
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
    padding: 30,
  },
  dateIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
