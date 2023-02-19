export type Followers = {
  username: string;
  name: string;
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
  avatar: {
    imageType: string | null;
    imageName: string | null;
    imageData: string;
  };
}
