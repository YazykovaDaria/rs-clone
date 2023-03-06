type Args = {
  text: string;
  img: File[];
  parentId?: string;
};

const getFormData = ({ text, img, parentId }: Args): FormData => {
  const formData = new FormData();
  if (text) {
    formData.append('text', text);
  }
  if (img.length > 0) {
    for (let i = 0; i < img.length; i += 1) {
      formData.append('images', img[i]);
    }
  }
  if (parentId) {
    formData.append('parentId', parentId);
  }
  return formData;
};
export default getFormData;
