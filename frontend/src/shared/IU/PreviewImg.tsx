/* eslint-disable react/require-default-props */

type Props = {
  files: File[];
  close?: (imgName: string) => void;
  setImgError: (error: string) => void;
};

export default function PreviewImage({ files, close, setImgError }: Props) {
  const filesSrc = files.map((file) => {
    const src = URL.createObjectURL(file);
    const { name } = file;
    return { src, name };
  });

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filesSrc.map((file) => (
        <div key={file.src} className="relative">
          <img
            src={file.src}
            alt=" "
            data-name={file.name}
            className="preview-img"
          />

          <button
            type="button"
            onClick={() => {
              if (close) {
                close(file.name);
                setImgError('');
              }
            }}
            className="absolute right-1 top-1 w-5 h-5 hover:bg-zinc-400 hover:rounded-full"
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
