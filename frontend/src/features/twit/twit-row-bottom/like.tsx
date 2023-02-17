import './style.css';

export default function Like({
  likes,
  liked,
}: {
  likes: number;
  liked: boolean;
}) {
  return (
    <div
      title="Like"
      className="twit__like text-gray-350 flex flex-nowrap items-center transition-colors duration-200 mr-5"
    >
      <div className="w-9 h-9 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          style={
            liked === true
              ? { fill: 'rgb(249, 24, 128)', stroke: 'rgb(249, 24, 128)' }
              : {}
          }
          className="w-5 h-5 stroke-gray-350 transition-colors duration-200 fill-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <span className="p-2">{likes}</span>
    </div>
  );
}
