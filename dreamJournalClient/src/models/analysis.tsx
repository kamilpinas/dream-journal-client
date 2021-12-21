import {ConsciousnessModel} from './consciousness';
import {EmotionModel} from './emotion';

export interface AnalysisModel {
  sleepLevel?: number;
  rating?: number;
  isNightmare?: boolean;
  isMoodAffecting?: boolean;
  consciousness?: ConsciousnessModel;
  emotions?: Array<EmotionModel>;
}
