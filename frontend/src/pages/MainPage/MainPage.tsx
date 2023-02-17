import { useTranslation } from 'react-i18next';
import TwitCreator from '../../features/twit-creator/Twit-creator';
import Twit from '../../features/twit/twit';
import { useGetTweetsQuery } from '../../entities/API/getTwitApi';
import Spiner from '../../shared/IU/spiner/spiner';
import ITweet from '../../shared/types/ITweet';

function Main() {
  const { t } = useTranslation();
  const { data, isLoading } = useGetTweetsQuery('');
  if (isLoading) return <Spiner />;
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
          likes={tweet.likes}
          liked={tweet.liked}
          replies={tweet.replies}
          views={tweet.views}
        />
      ))}
    </>
  );
}

export default Main;
