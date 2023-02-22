import './style.css';
import { useState } from 'react';
import { useAddRetweetMutation } from '../../../entities/API/TwitApi';

export default function Retweet({
  retweets,
  retweeted,
  id,
  isRetweet,
}: {
  retweets: number;
  retweeted: boolean;
  id: number;
  isRetweet: boolean | null;
}) {
  const [addRetweet] = useAddRetweetMutation();
  const [isRetweeted, setIsRetweeted] = useState(retweeted);
  const handleAddRetweet = async () => {
    try {
      if (!isRetweet) {
        setIsRetweeted(!isRetweeted);
        await addRetweet({ parentId: id, isRetweet: true }).unwrap();
      } else {
        return;
      }
    } catch (err) {
      throw new Error(err);
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={handleAddRetweet}
      role="button"
      tabIndex={0}
      title="Retweet"
      className="twit__retweet text-gray-350 flex flex-nowrap items-center transition-colors duration-200 sm:mr-5 md:mr-10"
    >
      <div className="w-9 h-9 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={retweeted === true ? { fill: 'rgb(0, 186, 124)' } : {}}
          className="w-5 h-5 stroke-none transition-colors duration-200 fill-gray-350"
        >
          <g>
            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
          </g>
        </svg>
      </div>
      <span className="p-2">{retweets}</span>
    </div>
  );
}
