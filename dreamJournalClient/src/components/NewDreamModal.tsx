import * as React from 'react';
import {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Modal,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import {TabView, SceneMap} from 'react-native-tab-view';
import {instance} from '../api/axios';
import {DreamModel} from '../models/dream';
import {AnalysisModal} from './AnalysisModal';
import Background from './Background';
import {ConsciousnessModal} from './ConsciousnessModal';
import {DreamDescription} from './DreamDescription';
import DreamSwiper from './DreamSwiper';
interface NewDreamModalProps {
  showModal: boolean;
  dream?: DreamModel;
  toggle: (show: boolean) => void;
}
export function NewDreamModal(props: NewDreamModalProps) {
  console.log('modal');
  return <DreamSwiper />;
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
