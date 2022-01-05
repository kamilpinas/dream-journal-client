import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import instance from '../api/axios';
import {AnalysisModal} from './AnalysisModal';
import {DreamDescription} from './DreamDescription';
import {ConsciousnessModal} from './ConsciousnessModal';
import {theme} from '../core/theme';
import moment from 'moment';

export function NewDream({navigation, route}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [newDream, setNewDream] = useState(
    route.params !== undefined ? route.params.item : {},
  );
  const [dreamDesc, setDreamDesc] = useState(
    route.params !== undefined
      ? {
          title: route.params.item.title,
          description: route.params.item.description,
          startDate: moment(route.params.item.startDate).toDate(),
          endDate: moment(route.params.item.endDate).toDate(),
          category: route.params.item.category,
        }
      : {},
  );
  const [newAnalysis, setNewAnalysis] = useState(
    route.params !== undefined ? route.params.item.analysis : {},
  );
  const [newConsc, setNewConsc] = useState(
    route.params !== undefined ? route.params.item.analysis.consciousness : {},
  );

  const onIndexChanged = index => {
    setNewDream({
      ...newDream,
      ...dreamDesc,
      analysis: {...newAnalysis, consciousness: {...newConsc}},
    });
    setActiveIndex(index);
  };

  const onClose = () => {
    setActiveIndex(0);
    navigation.navigate('Dashboard');
  };

  const onSave = () => {
    if (route.params !== undefined) {
      updateDream(route.params.item._id);
    } else {
      addDream();
    }
    setActiveIndex(0);
    navigation.navigate('Dashboard');
  };

  function addDream() {
    instance
      .post('/dream', newDream)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function updateDream(id) {
    instance
      .patch('/dream/' + id, newDream)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <View>
        {activeIndex === 0 && (
          <IconButton
            icon="close"
            color={theme.colors.primary}
            size={30}
            onPress={onClose}
          />
        )}
      </View>
      <Swiper
        onIndexChanged={onIndexChanged}
        showsButtons={true}
        loop={false}
        bounces={false}
        index={activeIndex}
        activeDotColor={theme.colors.primary}>
        <DreamDescription dream={dreamDesc} setNewDream={setDreamDesc} />
        <AnalysisModal analysis={newAnalysis} setNewAnalysis={setNewAnalysis} />
        <ConsciousnessModal
          consciousness={newConsc}
          setNewConsciousness={setNewConsc}
        />
      </Swiper>
      <View style={styles.navButton}>
        {activeIndex === 2 && (
          <Button
            mode="contained"
            style={styles.buttonsContainer}
            onPress={onSave}>
            Zapisz
          </Button>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginBottom: 30,
    width: '50%',
  },
});
