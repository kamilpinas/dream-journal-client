import {AnalysisModel} from './analysis';
import {CategoryModel} from './category';

export interface DreamModel {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category: CategoryModel;
  analysis: AnalysisModel;
}
