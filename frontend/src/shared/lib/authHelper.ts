import { convertFileInSrc } from './imgHelper';
import { defaultUserSrc } from '../constants/common';
import { SaveUser, User } from '../types/user';

type Tmp = {
  avatar: string;
  following: string[];
  followers: [];
};

const normalizeUserData = (user: User): SaveUser => {
  const tmp: Tmp = {
    avatar: defaultUserSrc,
    following: [],
    followers: [],
  };

  const { avatar } = user;
  if (avatar.imageData && avatar.imageType) {
    tmp.avatar = convertFileInSrc(avatar.imageType, avatar.imageData);
  }
  if (user.following.length > 0) {
    tmp.following = user.following.map((val) => val.username);
  }
  return { ...user, ...tmp };
};

export default normalizeUserData;
