export default function TwitContent({
  images,
}: {
  images: {
    type: string | undefined;
    name: string | undefined;
    data: string | undefined;
  }[];
}) {
  let imgSrc = '';
  if (images) {
    imgSrc = images.length
      ? `data:${images[0].type};base64, ${images[0].data}`
      : '';
  }

  return (
    <img
      src={imgSrc}
      style={imgSrc ? { display: 'block' } : { display: 'none' }}
      alt="user"
      className="rounded-xl object-contain mt-2 mb-1 md:max-w-[50%] max-w-[80%] border"
    />
  );
}
