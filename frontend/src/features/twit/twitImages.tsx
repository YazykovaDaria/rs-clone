export default function TwitImages({
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
            alt="user"
            key={image.name}
            className="rounded-xl object-contain mt-2 mb-1 sm:max-w-[40%] max-w-[70%] border m-1 max-h-[250px] p-1"
          />
        )
      )}
    </div>
  );
}
