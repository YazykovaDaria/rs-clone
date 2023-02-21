export default function UserName({
  name,
  username,
}: {
  name: string;
  username: string;
}) {
  return (
    <a
      className="text-black hover:underline font-bold pr-1"
      href={`/profile/${username}`}
    >
      {name}
    </a>
  );
}
