export default function UserName({
  thisName,
  thisUsername,
}: {
  thisName: string;
  thisUsername: string;
}) {
  return (
    <a
      className="text-black hover:underline font-bold pr-1 dark:text-white"
      href={`/profile/${thisUsername}`}
    >
      {thisName}
    </a>
  );
}
