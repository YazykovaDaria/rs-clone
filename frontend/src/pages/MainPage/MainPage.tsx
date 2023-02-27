/* eslint-disable @typescript-eslint/no-use-before-define */
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import TwitCreator from '../../features/twit-creator/Twit-creator';
import Twit from '../../features/twit/twit';
import { useGetTweetsQuery } from '../../entities/API/TwitApi';
import ITweet from '../../shared/types/ITweet';
import Spiner from '../../shared/IU/spiner/spiner';

function Main() {
  const { t } = useTranslation();
  const [limitCount, setLimitCount] = useState(3);
  const { data, isLoading } = useGetTweetsQuery({
    username: '',
    limit: limitCount,
  });
  const [lastScrollTime, setLastScrollTime] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  });

  if (isLoading) return <Spiner />;
  let count = 0;
  let tweets: ITweet[] = [];
  if (data) {
    count = data.count;
    tweets = data.tweets;
  }

  let isThrottled = false;

  function scrollHandler(e: Event) {
    if (isThrottled) return;
    isThrottled = true;

    requestAnimationFrame(() => {
      const target = e.target as Document;
      if (
        target.documentElement.scrollHeight -
          (target.documentElement.scrollTop + window.innerHeight) <
          100 &&
        tweets?.length < count &&
        !isLoading
      ) {
        const currentTime = new Date().getTime();
        if (currentTime - lastScrollTime >= 1000) {
          setLimitCount((prevState) => prevState + 1);
          setLastScrollTime(currentTime);
        }
      }
      isThrottled = false;
    });
  }

  return (
    <>
      <h1 className="font-bold text-xl w-full py-2 pl-4 border-b dark:border-slate-600">
        {t('home')}
      </h1>
      <TwitCreator />
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
      {!isLoading && tweets.length < count && <Spiner />}
    </>
  );
}

export default Main;
