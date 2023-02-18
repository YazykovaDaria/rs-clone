export default function UserAlias({ username }: { username: string }) {
  return (
    <div className="text-gray-350 after:content-['·'] after:ml-0.5 pr-1">
      @{username}
    </div>
  );
}
