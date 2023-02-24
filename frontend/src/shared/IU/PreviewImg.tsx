import { useState } from 'react';

type Props = {
  file: File;
};

export default function PreviewImage({ file }: Props) {
  const [preview, setPreview] = useState('');

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result as string);
  };

  return (
    <div>
      <img
        src={preview}
        alt="logo"
        className="sm:max-w-sm max-h-sm mt-5 mx-auto max-w-[250px]"
      />
    </div>
  );
}
