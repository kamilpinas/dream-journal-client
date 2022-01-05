import {defaultDream, DreamModel} from './dream';
import {defaultUser, UserModel} from './user';

export interface SharedDreamModel {
  sharedOn: string;
  votes: number;
  user: UserModel;
  dream: DreamModel;
}

export const defaultSharedDream = {
  sharedOn: '',
  votes: 0,
  user: defaultUser,
  dream: defaultDream,
};
