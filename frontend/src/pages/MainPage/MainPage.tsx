/* eslint-disable import/no-extraneous-dependencies */
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TwitCreator from '../../features/twit-creator/Twit-creator';
import Twit from '../../features/twit/twit';
import { useGetTweetsQuery } from '../../entities/API/TwitApi';
import ITweet from '../../shared/types/ITweet';
import Spiner from '../../shared/IU/spiner/spiner';

function Main() {
  const { t } = useTranslation();
  const [limit, setLimit] = useState(5);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { data, isLoading, error, isFetching } = useGetTweetsQuery({
    username: '',
    limit,
  });

  useEffect(() => {
    if (data) {
      setTweets(data.tweets);
    }
  }, [data]);

  const loadMoreTweets = () => {
    if (data) {
      setLimit(limit + 5);
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl w-full py-2 pl-4 border-b dark:border-slate-600">
        {t('home')}
      </h1>
      <TwitCreator />
      <InfiniteScroll
        dataLength={tweets.length}
        next={loadMoreTweets}
        hasMore={!error}
        loader={
          (isFetching || isLoading) && tweets.length < data?.count && <Spiner />
        }
      >
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
      </InfiniteScroll>
    </>
  );
}

export default Main;
