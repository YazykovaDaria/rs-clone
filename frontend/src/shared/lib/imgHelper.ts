/* eslint-disable import/prefer-default-export */
export const getImgForServer = (img: File, name: string): FormData => {
  const formData = new FormData();
  const keyName = 'avatar';
  formData.append(keyName, img, name);
  return formData;
};
