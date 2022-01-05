export interface UserModel {
  name: string;
  email: string;
  password: string;
}

export const defaultUser = {
  name: '',
  email: '',
  password: '',
};
