export default function previewImage() {
  const file = (document.getElementById('file-input') as HTMLInputElement)
    .files;
  if (file && file.length > 0) {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      if (e.target instanceof FileReader) {
        const preview = document.getElementById('preview') as HTMLElement;
        if (e.target.result !== null) {
          preview.setAttribute('src', e.target.result.toString());
        }
        preview.style.display = 'block';
      }
    };
    fileReader.readAsDataURL(file[0]);
  }
}
