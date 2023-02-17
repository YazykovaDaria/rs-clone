/* eslint-disable import/prefer-default-export */
import { SaveUser, UserData } from '../types/user';

const defaultUser = {
  about: '',
  birthday: '',
  location: '',
  name: '',
  site: '',
  username: '',
  src: '',
};

export const checkUserData = (user: SaveUser | null): UserData | SaveUser => {
  if (user) {
    return user;
  }
  return defaultUser;
};
