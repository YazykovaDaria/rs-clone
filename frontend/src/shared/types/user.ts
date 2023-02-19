/* eslint-disable @typescript-eslint/naming-convention */
import { Followers } from './IUserProfile';

export type SaveUser = {
  about: string;
  accessToken: string;
  birthday: string;
  email: string;
  id: number;
  location: string;
  name: string;
  registration_date: string;
  site: string;
  username: string;
  avatar: string;
  followers: Followers[];
  following: string[];
};

export type User = {
  about: string;
  accessToken: string;
  birthday: string;
  email: string;
  id: number;
  location: string;
  name: string;
  registration_date: string;
  site: string;
  username: string;
  followers: Followers[];
  following: Followers[];
  avatar: {
    imageType: null | string;
    imageName: null | string;
    imageData: string;
  };
};
