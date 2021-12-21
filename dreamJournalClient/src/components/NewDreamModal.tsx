import * as React from 'react';
import {useState} from 'react';
import {Dimensions, SafeAreaView, Modal, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {TabView, SceneMap} from 'react-native-tab-view';
import {instance} from '../api/axios';
import {DreamModel} from '../models/dream';
import {AnalysisModal} from './AnalysisModal';
import {ConsciousnessModal} from './ConsciousnessModal';
import {DreamDescription} from './DreamDescription';
interface NewDreamModalProps {
  showModal: boolean;
  dream?: DreamModel;
  toggle: (show: boolean) => void;
}
export function NewDreamModal(props: NewDreamModalProps) {
  const [navigationState, setNavigationState] = useState({
    index: 0,
    routes: [
      {key: 'description', title: 'Opis'},
      {key: 'analysis', title: 'Analiza'},
      {key: 'consciousness', title: 'Świadomość'},
    ],
  });
  const [newDream, setNewDream] = useState<Partial<DreamModel>>({});
  console.log('new dream,', newDream);
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
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.showModal}>
        <TabView
          navigationState={navigationState}
          renderScene={SceneMap({
            description: () => (
              <DreamDescription dream={newDream} setNewDream={setNewDream} />
            ),
            analysis: () => (
              <AnalysisModal dream={newDream} setNewDream={setNewDream} />
            ),
            consciousness: () => (
              <ConsciousnessModal dream={newDream} setNewDream={setNewDream} />
            ),
          })}
          onIndexChange={(index: number) =>
            setNavigationState({...navigationState, index})
          }
          initialLayout={{width: Dimensions.get('window').width}}
        />
        <View style={styles.buttonsContainer}>
          <Button
            style={styles.buttonNav}
            mode="contained"
            onPress={() => {
              if (navigationState.index === 0) {
                setNewDream({});
                props.toggle(!props.showModal);
              } else {
                setNavigationState({
                  ...navigationState,
                  index: navigationState.index - 1,
                });
              }
            }}>
            {navigationState.index === 0 ? 'Wyjdź' : 'Wróć'}
          </Button>
          <Button
            style={styles.buttonNav}
            mode="contained"
            onPress={() => {
              if (navigationState.index === 2) {
                addDream();
                props.toggle(!props.showModal);
              } else {
                setNavigationState({
                  ...navigationState,
                  index: navigationState.index + 1,
                });
              }
            }}>
            {navigationState.index === 2 ? 'Zapisz' : 'Dalej'}
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonNav: {
    width: 150,
  },
  buttonsContainer: {
    margin: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
