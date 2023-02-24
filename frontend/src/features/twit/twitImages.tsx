/* eslint-disable react/jsx-key */
export default function TwitContent({
  images,
}: {
  images: {
    type: string;
    name: string;
    data: string;
  }[];
}) {
  return (
    <div className="flex flex-row flex-wrap sm:max-w-[80%]">
      {images.map(
        (image: {
          type: string | undefined;
          name: string | undefined;
          data: string | undefined;
        }) => (
          <img
            src={image.type ? `data:${image.type};base64, ${image.data}` : ''}
            style={image.type ? { display: 'block' } : { display: 'none' }}
            alt="user"
            key={image.name}
            className="rounded-xl object-contain mt-2 mb-1 max-w-[45%] border m-2 max-h-[300px] p-1"
          />
        )
      )}
    </div>
  );
}
