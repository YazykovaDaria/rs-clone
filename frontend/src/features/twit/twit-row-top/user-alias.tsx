export default function UserAlias({ thisUsername }: { thisUsername: string }) {
  return (
    <a
      className="text-gray-350 after:content-['·'] after:ml-0.5 pr-1 dark:text-slate-500"
      href={`/profile/${thisUsername}`}
    >
      @{thisUsername}
    </a>
  );
}
