import {ConsciousnessModel, defaultConsciousness} from './consciousness';
import {defaultEmotion, EmotionModel} from './emotion';

export interface AnalysisModel {
  sleepLevel?: number;
  rating?: number;
  isNightmare?: boolean;
  isMoodAffecting?: boolean;
  consciousness?: ConsciousnessModel;
  emotions?: Array<EmotionModel>;
}

export const defaultAnalysis = {
  sleepLevel: 0,
  rating: 0,
  isNightmare: false,
  isMoodAffecting: false,
  consciousness: defaultConsciousness,
  emotions: defaultEmotion,
};
