import { Followers } from '../../shared/types/IUserProfile';
import User from '../../shared/IU/user/User';
import WithNavigate from '../../shared/IU/WithNavigate';

type Props = {
  followers: Followers[];
};

const FollowContainer = ({ followers }: Props) => {
  return (
    <>
      {followers.map((user) => (
        <div
          key={user.username}
          className=" hover:bg-slate-300 hover:rounded-full p-1 cursor-pointer"
        >
          <WithNavigate url={`/profile/${user.username}`}>
            <User
              name={user.name}
              username={user.username}
              avatar={user.avatar}
            />
          </WithNavigate>
        </div>
      ))}
    </>
  );
};

export default FollowContainer;
