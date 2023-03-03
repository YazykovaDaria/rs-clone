import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import InfiniteScroll from 'react-infinite-scroll-component';
import HeaderProfile from '../../features/header-profile/header-profile';
import Twit from '../../features/twit/twit';
import { useGetTweetsQuery } from '../../entities/API/TwitApi';
import Spiner from '../../shared/IU/spiner/spiner';
import ITweet from '../../shared/types/ITweet';

function Profile() {
  const { user } = useParams();
  const [limit, setLimit] = useState(5);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const { data, isLoading, error, isFetching } = useGetTweetsQuery({
    username: user || '',
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
      <HeaderProfile user={user || ''} />
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

export default Profile;
