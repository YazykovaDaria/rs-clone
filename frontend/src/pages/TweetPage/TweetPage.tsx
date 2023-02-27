import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { delParentTwit } from '../../entities/parentTwitSlice';
import { useGetReplaysQuery } from '../../entities/API/TwitApi';
import ITweet from '../../shared/types/ITweet';
import Spiner from '../../shared/IU/spiner/spiner';
import Twit from '../../features/twit/twit';

const TweetPage = () => {
  const parent = useSelector((state) => {
    const tweets = state.parentTwit.parentTweet;
    return tweets[tweets.length - 1];
  });

  const dispathc = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useGetReplaysQuery({ tweetId: id });

  let tweets: ITweet[] = [];
  if (data) {
    tweets = data.tweets;
  }
  if (isLoading) return <Spiner />;

  const navigator = () => {
    dispathc(delParentTwit(parent));
    navigate(-1);
  };

  return (
    <>
      <h1 className="font-bold text-xl w-full py-2 pl-4 border-b dark:border-slate-600 flex">
        <div className="arrow-back min-w-[56px] min-h-[32px] flex items-start">
          <button
            onClick={navigator}
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
        {t('twe')}
      </h1>
      {parent && (
        <Twit
          key={parent.id}
          id={parent.id}
          parentId={parent.pparentId}
          text={parent.text}
          createdAt={parent.createdAt}
          user={parent.user}
          origin={parent.origin}
          isRetweet={parent.isRetweet}
          likes={parent.likes}
          liked={parent.liked}
          replies={parent.replies}
          views={parent.views}
          viewed={parent.viewed}
          retweets={parent.retweets}
          retweeted={parent.retweeted}
          images={parent.images}
        />
      )}

      {tweets.map((tweet: ITweet) => (
        <Twit
          key={tweet.id}
          id={tweet.id}
          parentId={tweet.parentId}
          text={tweet.text}
          createdAt={tweet.createdAt}
          user={tweet.user}
          origin={tweet.origin}
          isRetweet={tweet.isRetweet}
          likes={tweet.likes}
          liked={tweet.liked}
          replies={tweet.replies}
          views={tweet.views}
          viewed={tweet.viewed}
          retweets={tweet.retweets}
          retweeted={tweet.retweeted}
          images={tweet.images}
        />
      ))}
    </>
  );
};

export default TweetPage;
