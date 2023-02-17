import { useParams } from 'react-router-dom';
import HeaderProfile from '../../entities/header-profile/header-profile';
import Twit from '../../features/twit/twit';
import { useGetTweetsQuery } from '../../entities/API/TwitApi';
import Spiner from '../../shared/IU/spiner/spiner';
import ITweet from '../../shared/types/ITweet';

function Profile() {
  const { user } = useParams();
  const { data, isLoading } = useGetTweetsQuery(user);
  if (isLoading) return <Spiner />;
  return (
    <>
      <HeaderProfile user={user || ''} />
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
          retweets={tweet.retweets}
          retweeted={tweet.retweeted}
        />
      ))}
    </>
  );
}

export default Profile;
