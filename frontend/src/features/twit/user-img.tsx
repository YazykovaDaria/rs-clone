import Avatar from '../../shared/types/avatar';
import { defaultUserSrc } from '../../shared/constants/common';

export default function UserImg({
  thisUsername,
  thisAvatar,
}: {
  thisUsername: string | undefined;
  thisAvatar: Avatar;
}) {
  return (
    <a
      className="sm:w-12 sm:h-12 w-10 h-10 flex items-center justify-center transition-colors duration-200 mr-3"
      href={`/profile/${thisUsername}`}
    >
      <img
        src={
          thisAvatar.imageType && thisAvatar.imageData
            ? `data:${thisAvatar.imageType};base64, ${thisAvatar.imageData}`
            : defaultUserSrc
        }
        alt="user"
        className="rounded-full object-contain"
      />
    </a>
  );
}
