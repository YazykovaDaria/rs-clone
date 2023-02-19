import Avatar from '../../shared/types/avatar';

export default function UserImg({ avatar }: { avatar: Avatar }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center transition-colors duration-200 mr-3">
      <img
        src="https://randomuser.me/api/portraits/lego/6.jpg"
        alt="user"
        className="rounded-full object-contain"
      />
    </div>
  );
}
