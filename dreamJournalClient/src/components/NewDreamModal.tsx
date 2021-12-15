import * as React from 'react';
import {Dimensions, SafeAreaView, Modal, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {TabView, SceneMap} from 'react-native-tab-view';
import {AnalysisModal} from './AnalysisModal';
import {ConsciousnessModal} from './ConsciousnessModal';
import {DreamDescription} from './DreamDescription';

interface NewDreamModalProps {
  showModal: boolean;
  toggle: (show: boolean) => void;
}
export class NewDreamModal extends React.Component<NewDreamModalProps> {
  state = {
    index: 0,
    routes: [
      {key: 'description', title: 'Opis'},
      {key: 'analysis', title: 'Analiza'},
      {key: 'consciousness', title: 'Świadomość'},
    ],
  };
  render() {
    return (
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showModal}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              description: DreamDescription,
              analysis: AnalysisModal,
              consciousness: ConsciousnessModal,
            })}
            onIndexChange={(index: any) => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
          />
          <View style={styles.buttonsContainer}>
            <Button
              style={styles.buttonNav}
              mode="contained"
              onPress={() => {
                if (this.state.index === 0) {
                  this.props.toggle(!this.props.showModal);
                } else {
                  this.setState({index: this.state.index - 1});
                }
              }}>
              {this.state.index === 0 ? 'Wyjdź' : 'Wróć'}
            </Button>
            <Button
              style={styles.buttonNav}
              mode="contained"
              onPress={() => {
                if (this.state.index === 2) {
                  this.props.toggle(!this.props.showModal);
                } else {
                  this.setState({index: this.state.index + 1});
                }
              }}>
              {this.state.index === 2 ? 'Zapisz' : 'Dalej'}
            </Button>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
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
