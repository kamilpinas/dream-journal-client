import React, {useEffect, useState} from 'react';
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
import instance from '../api/axios';
import moment from 'moment';

export function Notifications({navigation, route}) {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({
    userId: '',
    realityTest: false,
    realityTestInterval: 0,
    dailyReminder: false,
    dailyReminderInterval: new Date(),
  });

  function getNotificationInfo() {
    instance
      .get('/notifications/' + route.params.user._id)
      .then(function (response) {
        response.data.length && setNotification(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function addNotificationInfo() {
    if (route.params !== undefined) {
      instance
        .patch('/notifications/' + route.params.user._id, {
          ...notification,
          userId: route.params.user._id,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
        });
    }
  }

  const createRealityTestNotification = interval => {
    PushNotification.localNotificationSchedule({
      channelId: 'realityCheck',
      title: 'TEST RZECZYWISTOŚCI',
      allowWhileIdle: true,
      message:
        'Sprawdź czy śnisz ! Popatrz na swoje ręce, spróbuj dotknąć ściany lub przełącz światlo',
      repeatType: 'hour',
      repeatTime: interval,
      date: new Date(Date.now() + interval * 3600000),
    });
  };

  const createDailyReminderNotification = interval => {
    PushNotification.localNotificationSchedule({
      channelId: 'dailyReminder',
      title: 'PRZYPOMNIENIE O ZAPISANIU SNU',
      allowWhileIdle: true,
      message:
        'Dzień dobry, zanotuj to co Ci się dziś przyśniło już teraz. Kliknij tutaj!',
      repeatType: 'day',
      repeatTime: 1,
      date: new Date(interval),
    });
  };

  const clearNotification = id => {
    PushNotification.cancelLocalNotification(id);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route.params.user._id) {
        getNotificationInfo();
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Ustawienia powiadomień</Header>

      <View style={{width: '100%'}}>
        <View style={styles.spaceBetween}>
          <Paragraph>Test rzeczywistości</Paragraph>
          <Switch
            value={notification.realityTest || false}
            onValueChange={value =>
              setNotification({...notification, realityTest: value})
            }
          />
        </View>
        <SliderLevel
          min={0}
          max={24}
          value={notification.realityTestInterval || 0}
          step={1}
          disabled={!notification.realityTest}
          onChange={value =>
            setNotification({...notification, realityTestInterval: value})
          }
          label={'Co ile godzin '}
        />
      </View>
      <View style={{width: '100%'}}>
        <View style={styles.spaceBetween}>
          <Paragraph>Przypomnienie o zapisaniu snu</Paragraph>
          <Switch
            value={notification.dailyReminder || false}
            onValueChange={value =>
              setNotification({...notification, dailyReminder: value})
            }
          />
        </View>
        <View style={styles.dateIcons}>
          <Paragraph>Wysyłaj powiadomienie o </Paragraph>
          <Paragraph>
            {moment(notification.dailyReminderInterval).format('HH:mm')}
          </Paragraph>
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
        date={moment(notification.dailyReminderInterval).toDate() || new Date()}
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
          setNotification({...notification, dailyReminderInterval: date});
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Button
        mode="contained"
        onPress={() => {
          if (notification.dailyReminder) {
            createDailyReminderNotification(notification.dailyReminderInterval);
          } else {
            clearNotification('dailyReminder');
          }
          if (notification.realityTest) {
            createRealityTestNotification(notification.realityTestInterval);
          } else {
            clearNotification('realityTest');
          }
          addNotificationInfo();
          navigation.goBack();
        }}>
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
