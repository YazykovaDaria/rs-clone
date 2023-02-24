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
  // console.log(images.length);
  // let imgSrc = '';
  // if (images) {
  //   imgSrc = images.length
  //     ? `data:${images[0].type};base64, ${images[0].data}`
  //     : '';
  // }

  return (
    <>
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
            className="rounded-xl object-contain mt-2 mb-1 md:max-w-[50%] max-w-[80%] border"
          />
        )
      )}
    </>
  );
}
