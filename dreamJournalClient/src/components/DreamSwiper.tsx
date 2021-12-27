import React, {useMemo, useState} from 'react';
import Swiper from 'react-native-swiper';
import {instance} from '../api/axios';
import {AnalysisModel} from '../models/analysis';
import {DreamModel} from '../models/dream';
import {AnalysisModal} from './AnalysisModal';
import {ConsciousnessModel} from '../models/consciousness';
import {DreamDescription} from './DreamDescription';
import {ConsciousnessModal} from './ConsciousnessModal';

function DreamSwiper() {
  const [newDream, setNewDream] = useState<Partial<DreamModel>>({});
  const [newAnalysis, setNewAnalysis] = useState<AnalysisModel>();
  const [newConsc, setNewConsc] = useState<ConsciousnessModel>();

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
    <Swiper
      showsButtons={true}
      removeClippedSubviews={false}
      loadMinimal={true}
      loop={true}
      loadMinimalSize={1}>
      <DreamDescription dream={newDream} setNewDream={setNewDream} />
      <AnalysisModal analysis={newAnalysis} setNewAnalysis={setNewAnalysis} />
      <ConsciousnessModal
        consciousness={newConsc}
        setNewConsciousness={setNewConsc}
      />
    </Swiper>
  );
}

export default React.memo(DreamSwiper);
