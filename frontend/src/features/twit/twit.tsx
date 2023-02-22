import ITweet from '../../shared/types/ITweet';
import TwitContent from './twit-content';
import Like from './twit-row-bottom/like';
import Reply from './twit-row-bottom/reply';
import Retweet from './twit-row-bottom/retweet';
import Views from './twit-row-bottom/views';
import TwitDate from './twit-row-top/twit-date';
import TwitDelete from './twit-row-top/twit-delete';
import UserAlias from './twit-row-top/user-alias';
import UserName from './twit-row-top/user-name';
import UserImg from './user-img';
import { useAuth } from '../../entities/user/Auth/authContext';
import RetweetName from './twit-row-top/RetweetName';
import TwitImages from './twitImages';

export default function Twit({
  id,
  parentId,
  text,
  createdAt,
  user,
  origin,
  isRetweet,
  likes,
  liked,
  replies,
  views,
  viewed,
  retweets,
  retweeted,
  images,
}: ITweet) {
  const authUser = useAuth()?.user;
  let authUserUsername = '';
  let authUserName = '';
  if (authUser) {
    authUserUsername = authUser.username;
    authUserName = authUser.name;
  }
  const isOwnTwit = authUserUsername === user.username;
  const originUser = origin?.user;
  const thisCreatedAt = origin?.createdAt || createdAt;
  const thisName = originUser?.name || user.name;
  const thisUsername = originUser?.username || user.username;
  const thisAvatar = originUser?.avatar || user.avatar;

  return (
    <div className="cursor-pointer sm:p-4 p-3 hover:bg-slate-50 transition-colors duration-200 border-b">
      <RetweetName
        name={user.name}
        isRetweet={isRetweet}
        authUserName={authUserName}
      />
      <div className="flex w-full">
        <div>
          <UserImg thisUsername={thisUsername} thisAvatar={thisAvatar} />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <UserName thisName={thisName} thisUsername={thisUsername} />
              <UserAlias thisUsername={thisUsername} />
              <TwitDate thisCreatedAt={thisCreatedAt} />
            </div>
            <div>
              <TwitDelete isOwnTwit={isOwnTwit} id={id} />
            </div>
          </div>

          <div>
            <TwitContent text={text} />
            <TwitImages images={images} />
          </div>

          <div className="flex items-center flex-nowrap">
            <Reply replies={replies} />
            <Retweet
              retweets={retweets}
              retweeted={retweeted}
              id={id}
              parentId={parentId}
            />
            <Like likes={likes} liked={liked} id={id} parentId={parentId} />
            <Views views={views} id={id} viewed={viewed} />
          </div>
        </div>
      </div>
    </div>
  );
}
