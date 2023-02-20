import Avatar from './avatar';

export type Followers = {
  username: string;
  name: string;
  avatar: Avatar;
};

export default interface IUserProfile {
  username: string;
  email: string;
  name: string;
  about?: string;
  location?: string;
  site?: string;
  birthday: string;
  registration_date: string;
  followers: Followers[];
  following: Followers[];
  avatar: Avatar;
}
