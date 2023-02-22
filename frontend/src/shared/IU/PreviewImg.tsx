/* eslint-disable react/require-default-props */

type Props = {
  files: File[];
  close?: (immName: string) => void;
};

// need fix styles for img

export default function PreviewImage({ files, close }: Props) {
  const filesSrc = files.map((file) => {
    const src = URL.createObjectURL(file);
    const { name } = file;
    return { src, name };
  });

  return (
    <div className="flex flex-wrap">
      {filesSrc.map((file) => (
        <div key={file.src} className="relative">
          <img src={file.src} alt=" " data-name={file.name} />

          <button
            type="button"
            onClick={() => {
              if (close) {
                close(file.name);
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
