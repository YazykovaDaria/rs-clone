import TwitContent from './twit-content';
import Like from './twit-row-bottom/like';
import Reply from './twit-row-bottom/reply';
import Retweet from './twit-row-bottom/retweet';
import TwitDate from './twit-row-top/twit-date';
import TwitSettings from './twit-row-top/twit-settings';
import UserAlias from './twit-row-top/user-alias';
import UserName from './twit-row-top/user-name';
import UserImg from './user-img';

export default function Twit() {
  return (
    <div className="cursor-pointer p-4 hover:bg-slate-50 transition-colors duration-200 border-t border-x">
      <div className="flex w-full">
        <div>
          <UserImg />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <UserName /> <UserAlias /> <TwitDate />
            </div>
            <div>
              <TwitSettings />
            </div>
          </div>

          <div>
            <TwitContent />
          </div>

          <div className="flex items-center flex-nowrap">
            <Reply /> <Retweet /> <Like />
          </div>
        </div>
      </div>
    </div>
  );
}
