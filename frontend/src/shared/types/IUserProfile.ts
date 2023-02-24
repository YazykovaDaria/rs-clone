export type Avatar = {
  imageType: string | null;
  imageName: string | null;
  imageData: string;
};

export type Followers = {
  username: string;
  name: string;
  avatar: Avatar;
};

export default interface IUserProfile {
  id?: number;
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
  tweets: number;
  avatar: Avatar;
}
