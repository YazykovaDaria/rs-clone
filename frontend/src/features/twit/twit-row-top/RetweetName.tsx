export default function RetweetName({
  name,
  authUserName,
}: {
  name: string;
  authUserName: string;
}) {
  let retweetText = `${name} Retweeted`;
  const lang = localStorage.getItem('lng');
  if (lang === 'en' && name === authUserName) {
    retweetText = 'You Retweeted';
  }
  if (lang === 'ru' && name === authUserName) {
    retweetText = 'Вы Ретвитнули';
  }
  if (lang === 'ru' && name !== authUserName) {
    retweetText = `${name} Ретвитнул`;
  }

  return (
    <div className="flex flex-nowrap sm:ml-[60px] ml-[52px] items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-4 h-4 stroke-none transition-colors duration-200 fill-gray-350 mr-2"
      >
        <g>
          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
        </g>
      </svg>
      <div className="text-gray-350 font-bold text-xs">{retweetText}</div>
    </div>
  );
}
