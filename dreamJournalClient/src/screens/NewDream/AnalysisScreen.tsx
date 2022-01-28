import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, Paragraph, Portal, Modal, Switch} from 'react-native-paper';
import {SliderLevel} from '../../components/Slider';
import iconSet from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {AnalysisModel} from '../../models/analysis';
import {theme} from '../../core/theme';
import instance from '../../api/axios';
import {groupBy, mapToApiEmotions} from '../../api/helpers/mappings';
import Header from '../../components/Header';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
interface AnalysisScreenProps {
  analysis?: AnalysisModel;
  role?: string;
  setNewAnalysis: (dream: Partial<AnalysisModel>) => void;
}

export interface EmotionItem {
  type: string;
  id?: number;
  children: Array<{name: string}>;
}

export function AnalysisModa(props: AnalysisScreenProps) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState<Array<EmotionItem>>([]);
  const [visible, setVisible] = React.useState(false);
  const [newEmotion, setNewEmotion] = useState({name: '', type: ''});
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function getEmotions() {
    instance
      .get('emotions')
      .then(function (response) {
        const grouped = groupBy(response.data.docs, 'type').map(item => ({
          ...item,
          children: groupBy(item.children, 'name'),
        }));
        setItems(grouped);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function createEmotions() {
    instance
      .post('emotions', newEmotion)
      .then(async function (response) {
        getEmotions();
        hideModal();
        setNewEmotion({name: '', type: ''});
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function deleteEmotions(ids) {
    instance
      .delete('emotions/' + ids)
      .then(function (response) {
        getEmotions();
        props.setNewAnalysis({
          ...props.analysis,
          emotions: undefined,
        });
        setSelectedItems([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getEmotions();
    return () => {
      setItems([]);
    };
  }, []);
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Header>Analiza</Header>
      </View>
      <View style={styles.scene}>
        <SliderLevel
          min={0}
          max={5}
          value={props.analysis?.sleepLevel || 0}
          step={1}
          onChange={(value: number) =>
            props.setNewAnalysis({
              ...props.analysis,
              sleepLevel: value,
            })
          }
          label={'Poziom wyspania'}
        />
        <SliderLevel
          min={0}
          max={5}
          value={props.analysis?.rating || 0}
          step={1}
          onChange={(value: number) =>
            props.setNewAnalysis({
              ...props.analysis,
              rating: value,
            })
          }
          label={'Ocena snu'}
        />
        <View style={styles.spaceBetween}>
          <Paragraph>Czy był to koszmar?</Paragraph>
          <Switch
            value={props.analysis?.isNightmare || false}
            onValueChange={value =>
              props.setNewAnalysis({
                ...props.analysis,
                isNightmare: value,
              })
            }
          />
        </View>
        <View style={styles.spaceBetween}>
          <Paragraph>Czy wpłynął na twoje samopoczucie?</Paragraph>
          <Switch
            value={props.analysis?.isMoodAffecting || false}
            onValueChange={value =>
              props.setNewAnalysis({
                ...props.analysis,
                isMoodAffecting: value,
              })
            }
          />
        </View>
        <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
          <View style={{width: props.role === 'admin' ? '70%' : '100%'}}>
            <SectionedMultiSelect
              IconRenderer={iconSet}
              items={items}
              uniqueKey="name"
              subKey="children"
              displayKey="name"
              selectText="Wybierz emocje..."
              selectedText="wybranych"
              confirmText="Zapisz"
              searchPlaceholderText="Szukaj.."
              showDropDowns={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={array => {
                setSelectedItems(array);
              }}
              selectedItems={selectedItems}
              onConfirm={() => {
                props.setNewAnalysis({
                  ...props.analysis,
                  emotions: mapToApiEmotions(items, selectedItems),
                });
              }}
              colors={{
                primary: theme.colors.primary,
                text: theme.colors.primary,
              }}
            />
          </View>
          {props.role === 'admin' && (
            <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
              <IconButton icon={'plus'} onPress={showModal} />
              <IconButton
                icon={'minus'}
                onPress={() => deleteEmotions(selectedItems)}
              />
            </View>
          )}
        </View>
        {props.role === 'admin' && (
          <Portal>
            <Modal visible={visible} onDismiss={hideModal}>
              <View style={{backgroundColor: 'white', margin: 15, padding: 30}}>
                <TextInput
                  label="Typ emocji"
                  returnKeyType="next"
                  value={newEmotion.type}
                  onChangeText={text =>
                    setNewEmotion({...newEmotion, type: text})
                  }
                  autoCapitalize="none"
                />
                <TextInput
                  label="Nazwa emocji"
                  returnKeyType="done"
                  value={newEmotion.name}
                  onChangeText={text =>
                    setNewEmotion({...newEmotion, name: text})
                  }
                  autoCapitalize="none"
                />
                <Button mode="contained" onPress={createEmotions}>
                  Dodaj emocję
                </Button>
              </View>
            </Modal>
          </Portal>
        )}
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
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export const AnalysisScreen = React.memo(AnalysisModa);
