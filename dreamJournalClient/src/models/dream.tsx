import {AnalysisModel, defaultAnalysis} from './analysis';
import {CategoryModel, defaultCategory} from './category';

export interface DreamModel {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category: CategoryModel;
  analysis: AnalysisModel;
}

export const defaultDream = {
  title: '',
  description: '',
  startDate: new Date(),
  endDate: new Date(),
  category: defaultCategory,
  analysis: defaultAnalysis,
};
