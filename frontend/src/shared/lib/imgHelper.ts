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
