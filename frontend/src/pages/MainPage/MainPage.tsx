import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import TwitCreator from '../../features/twit-creator/Twit-creator';
import Twit from '../../features/twit/twit';
import { useGetTweetsQuery } from '../../entities/API/TwitApi';
import ITweet from '../../shared/types/ITweet';
import Preloader from '../../shared/IU/Preloader';

function Main() {
  const { t } = useTranslation();
  const [limitCount, setLimitCount] = useState(3);
  const { data, isLoading } = useGetTweetsQuery({
    username: '',
    limit: limitCount,
    offset: 0,
  });
  const scrollHandler = (e: Event) => {
    if (e) {
      const target = e.target as Document;
      if (
        target.documentElement.scrollHeight -
          (target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setLimitCount((prevState) => prevState + 1);
      }
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  });
  if (isLoading) return <Preloader />;

  return (
    <>
      <h1 className="font-bold text-xl w-full py-2 pl-4 border-b">
        {t('home')}
      </h1>
      <TwitCreator />
      {data.map((tweet: ITweet) => (
        <Twit
          key={tweet.id}
          id={tweet.id}
          parentId={tweet.parentId}
          text={tweet.text}
          createdAt={tweet.createdAt}
          user={tweet.user}
          isRetweet={tweet.isRetweet}
          likes={tweet.likes}
          liked={tweet.liked}
          replies={tweet.replies}
          views={tweet.views}
          retweets={tweet.retweets}
          retweeted={tweet.retweeted}
        />
      ))}
    </>
  );
}

export default Main;
