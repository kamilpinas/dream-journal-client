import * as React from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView, Modal} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {AnalysisModal} from './AnalysisModal';
import {DreamDescription} from './DreamDescription';

const ThirdRoute = () => <View style={{backgroundColor: '#545dfd'}} />;

interface NewDreamModalProps {
  modalVisible: boolean;
}
export class NewDreamModal extends React.Component<NewDreamModalProps> {
  state = {
    index: 0,
    routes: [
      {key: 'description', title: 'Opis'},
      {key: 'analysis', title: 'Analiza'},
      {key: 'consciousness', title: 'Świadomość'},
    ],
    showModal: true,
  };
  render() {
    return (
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}>
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              description: DreamDescription,
              analysis: AnalysisModal,
              consciousness: ThirdRoute,
            })}
            onIndexChange={(index: any) => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
          />
        </Modal>
      </SafeAreaView>
    );
  }
}
