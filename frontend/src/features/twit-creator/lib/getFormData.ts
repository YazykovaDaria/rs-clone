type Args = {
  text: string;
  img: File[];
};

const getFormData = ({ text, img }: Args): FormData => {
  const formData = new FormData();
  if (text) {
    formData.append('text', text);
  }
  if (img.length > 0) {
    for (let i = 0; i < img.length; i += 1) {
      formData.append('images', img[i]);
    }
  }
  return formData;
};
export default getFormData;
