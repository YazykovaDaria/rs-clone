import Avatar from '../../shared/types/avatar';

export default function UserImg({ avatar }: { avatar: Avatar }) {
  return (
    <div className="sm:w-12 sm:h-12 w-10 h-10 flex items-center justify-center transition-colors duration-200 mr-3">
      <img
        src={
          avatar.imageType && avatar.imageData
            ? `data:${avatar.imageType};base64, ${avatar.imageData}`
            : '../../../public/icon/unknown-user.svg'
        }
        alt="user"
        className="rounded-full object-contain"
      />
    </div>
  );
}
