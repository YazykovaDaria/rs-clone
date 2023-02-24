import { defaultUserSrc } from '../constants/common';
import { Avatar } from '../types/IUserProfile';

export const getImgForServer = (img: File, name: string): FormData => {
  const formData = new FormData();
  const keyName = 'avatar';
  formData.append(keyName, img, name);
  return formData;
};

export const convertFileInSrc = (
  imageType: string,
  imageData: string
): string => {
  return `data:${imageType};base64, ${imageData}`;
};

export const getAvatar = (avatar: Avatar): string => {
  if (avatar.imageType && avatar.imageData) {
    return convertFileInSrc(avatar.imageType, avatar.imageData);
  }
  return defaultUserSrc;
};
