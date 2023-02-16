export default interface IUserProfile {
  username: string;
  email: string;
  name: string;
  about?: string;
  location?: string;
  site?: string;
  birthday: string;
  registration_date: string;
  followers: number;
  following: number;
  tweets?: number;
  avatar: {
    imageType: string | null;
    imageName: string | null;
    imageData: string;
  };
}
