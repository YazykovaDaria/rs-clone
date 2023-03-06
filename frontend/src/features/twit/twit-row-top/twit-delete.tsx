import { useDeleteTweetMutation } from '../../../entities/API/TwitApi';
import Preloader from '../../../shared/IU/Preloader';
import './style.css';

export default function TwitDelete({ id }: { id: number }) {
  const [deleteTweet, { isLoading }] = useDeleteTweetMutation();
  const handleDeleteTweet = async () => {
    try {
      await deleteTweet({ tweetId: id }).unwrap();
    } catch (err) {
      throw new Error(String(err));
    }
  };
  if (isLoading) return <Preloader />;
  return (
    <div
      onClick={handleDeleteTweet}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          handleDeleteTweet();
        }
      }}
      role="button"
      tabIndex={0}
      title="Delete"
      className="twit__delete flex w-9 h-9 rounded-full items-center justify-center transition-colors duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.4}
        className="w-5 h-5 stroke-gray-350 transition-colors"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
  );
}
