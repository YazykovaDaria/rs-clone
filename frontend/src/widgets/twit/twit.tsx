import TwitContent from '../../entities/twit-content';
import Like from '../../features/twit/twit-row-bottom/like';
import Reply from '../../features/twit/twit-row-bottom/reply';
import Retweet from '../../features/twit/twit-row-bottom/retweet';
import TwitDate from '../../features/twit/twit-row-top/twit-date';
import TwitSettings from '../../features/twit/twit-row-top/twit-settings';
import UserAlias from '../../features/twit/twit-row-top/user-alias';
import UserName from '../../features/twit/twit-row-top/user-name';
import UserImg from '../../features/twit/user-img';

export default function Twit() {
  return (
    <div className="cursor-pointer w-[598px] relative p-4 hover:bg-slate-50 transition-colors duration-200 border">
      <div className="flex w-full">
        <div>
          <UserImg />
        </div>
        <div className="w-[506px]">
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
