import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import TextInput from './TextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from './Button';
import {IconButton, Paragraph} from 'react-native-paper';
import {theme} from '../core/theme';

interface DreamDescriptionProps {}
export function DreamDescription() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={[styles.scene, {backgroundColor: '#ff4081'}]}>
      <TextInput
        label="Tytuł"
        returnKeyType="next"
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        autoCapitalize="none"
      />
      <View style={styles.dateIcons}>
        <IconButton
          onPress={showDatepicker}
          icon="calendar"
          size={30}
          color={theme.colors.primary}
        />
        <IconButton
          onPress={showTimepicker}
          icon="clock-outline"
          size={30}
          color={theme.colors.primary}
        />
        <Paragraph>{date.toISOString()}</Paragraph>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <TextInput
        label="Treść"
        returnKeyType="next"
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        autoCapitalize="none"
        multiline={true}
        numberOfLines={10}
      />
      <Button mode="contained">Dalej</Button>
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
  },
});
