import { Avatar } from '../../types/IUserProfile';
import { getAvatar } from '../../lib/imgHelper';

type Props = {
  username: string;
  name: string;
  avatar: Avatar;
};

const User = ({ name, username, avatar }: Props) => {
  return (
    <div className="flex w-full justify-around">
      <div className="w-12 h-12 flex items-center justify-center transition-colors duration-200 mr-3">
        <img
          src={getAvatar(avatar)}
          alt="user"
          className="rounded-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-black hover:underline font-bold pr-1">{name}</p>
        <p className="text-gray-350 after:content-['·'] after:ml-0.5 pr-1">
          {`@${username}`}
        </p>
      </div>
    </div>
  );
};

export default User;
