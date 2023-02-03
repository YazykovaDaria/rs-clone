export default function UserImg() {
  return (
    <div className="w-12 h-12 flex items-center justify-center transition-all duration-200 relative mr-3">
      <img
        src="https://randomuser.me/api/portraits/lego/6.jpg"
        alt="user"
        className="rounded-full object-contain"
      />
      <div className="absolute hover:bg-black/10 top-0 bottom-0 right-0 left-0 rounded-full transition-all duration-200" />
    </div>
  );
}
