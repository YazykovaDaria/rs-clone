/* eslint-disable import/prefer-default-export */
import { SaveUser } from '../../../shared/types/user';

type InitValues = {
  name: string;
  about: string;
  location: string;
  site: string;
};

const defaultValues: InitValues = {
  name: '',
  about: ' ',
  location: '',
  site: '',
};

export const getInitValues = (user: SaveUser | null): InitValues => {
  if (user) {
    const { name, about, location, site } = user;
    return { name, about, location, site };
  }
  return defaultValues;
};
