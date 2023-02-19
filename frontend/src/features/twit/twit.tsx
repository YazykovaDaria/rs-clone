import ITweet from '../../shared/types/ITweet';
import TwitContent from './twit-content';
import Like from './twit-row-bottom/like';
import Reply from './twit-row-bottom/reply';
import Retweet from './twit-row-bottom/retweet';
import Views from './twit-row-bottom/views';
import TwitDate from './twit-row-top/twit-date';
import TwitSettings from './twit-row-top/twit-settings';
import UserAlias from './twit-row-top/user-alias';
import UserName from './twit-row-top/user-name';
import UserImg from './user-img';

export default function Twit({
  id,
  parentId,
  text,
  createdAt,
  user,
  isRetweet,
  likes,
  liked,
  replies,
  views,
  retweets,
  retweeted,
}: ITweet) {
  return (
    <div className="cursor-pointer sm:p-4 p-3 hover:bg-slate-50 transition-colors duration-200 border-b">
      <div className="flex w-full">
        <div>
          <UserImg avatar={user.avatar} />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <UserName name={user.name} />
              <UserAlias username={user.username} />
              <TwitDate createdAt={createdAt} />
            </div>
            <div>
              <TwitSettings />
            </div>
          </div>

          <div>
            <TwitContent text={text} />
          </div>

          <div className="flex items-center flex-nowrap">
            <Reply replies={replies} />
            <Retweet retweets={retweets} retweeted={retweeted} />
            <Like likes={likes} liked={liked} id={id} />
            <Views views={views} />
          </div>
        </div>
      </div>
    </div>
  );
}
