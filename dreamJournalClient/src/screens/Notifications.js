import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import {Paragraph, Switch, IconButton} from 'react-native-paper';
import {SliderLevel} from '../components/Slider';
import {theme} from '../core/theme';
import DatePicker from 'react-native-date-picker';
import BackButton from '../components/BackButton';
import PushNotification from 'react-native-push-notification';
import moment from 'moment';
export function Notifications({navigation, route}) {
  const [realityTest, setRealityTest] = useState(false);
  const [realityTestInterval, setRealityTestInterval] = useState(0);
  const [open, setOpen] = useState(false);
  const [dailyReminder, setDailyReminder] = useState(false);
  const [dailyReminderInterval, setDailyReminderInterval] = useState(
    new Date(),
  );

  const createNotification = interval => {
    PushNotification.localNotificationSchedule({
      channelId: 'realityCheck',
      title: 'TEST RZECZYWISTOŚCI',
      allowWhileIdle: true,
      message:
        'Sprawdź czy śnisz ! Popatrz na swoje ręce, spróbuj dotknąć ściany lub przełącz światlo',
      repeatType: 'hour',
      repeatTime: interval,
      date: new Date(Date.now() + interval * 3),
    });
  };

  const clearNotifications = () => {
    PushNotification.cancelAllLocalNotifications();
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Ustawienia powiadomień</Header>

      <View style={{width: '100%'}}>
        <View style={styles.spaceBetween}>
          <Paragraph>Test rzeczywistości</Paragraph>
          <Switch
            value={realityTest || false}
            onValueChange={value => setRealityTest(value)}
          />
        </View>
        <SliderLevel
          min={0}
          max={24}
          value={realityTestInterval || 0}
          step={1}
          disabled={!realityTest}
          onChange={value => setRealityTestInterval(value)}
          label={'Co ile godzin '}
        />
      </View>
      <View style={{width: '100%'}}>
        <View style={styles.spaceBetween}>
          <Paragraph>Przypomnienie o zapisaniu snu</Paragraph>
          <Switch
            value={dailyReminder || false}
            onValueChange={value => setDailyReminder(value)}
          />
        </View>
        <View style={styles.dateIcons}>
          <Paragraph>Wysyłaj powiadomienie o </Paragraph>
          <Paragraph>{moment(dailyReminderInterval).format('HH:mm')}</Paragraph>
          <IconButton
            onPress={() => setOpen(true)}
            icon="calendar"
            size={30}
            color={theme.colors.primary}
          />
        </View>
      </View>
      <DatePicker
        modal
        open={open}
        date={dailyReminderInterval || new Date()}
        androidVariant="iosClone"
        title="Sen rozpoczął się.."
        textColor={theme.colors.primary}
        locale={'pl'}
        confirmText="Zatwierdź"
        cancelText="Anuluj"
        is24hourSource="locale"
        mode="time"
        onConfirm={date => {
          setOpen(false);
          setDailyReminderInterval(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Button
        mode="contained"
        onPress={() =>
          realityTest
            ? createNotification(realityTestInterval)
            : clearNotifications()
        }>
        Zapisz
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 50,
  },
  spaceBetween: {
    marginVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  dateIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
