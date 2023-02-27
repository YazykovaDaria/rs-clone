/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { setParentTwit } from '../../entities/parentTwitSlice';

export default function Twit(props: ITweet) {
  const {
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
  } = props;

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

  const dispathc = useDispatch();
  const navigate = useNavigate();
  const navigator = () => {
    dispathc(setParentTwit(props));
    navigate(`/tweet/${id}`);
  };

  return (
    <div className="border-b dark:border-slate-600 sm:p-4 p-3 dark:hover:bg-slate-800">
      {isRetweet && (
        <RetweetName name={user.name} authUserName={authUserName} />
      )}
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
            <div>{isOwnTwit && <TwitDelete id={id} />}</div>
          </div>

          <div
            onClick={navigator}
            className="cursor-pointer hover:bg-slate-100 transition-colors duration-200"
          >
            <TwitContent text={text} />
            {images.length > 0 && <TwitImages images={images} />}
          </div>

          <div className="flex items-center flex-nowrap">
            <Reply
              replies={replies}
              id={id}
              thisName={thisName}
              thisUsername={thisUsername}
              thisAvatar={thisAvatar}
              thisCreatedAt={thisCreatedAt}
              text={text}
              likes={likes}
              retweets={retweets}
              views={views}
              images={images}
            />
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
