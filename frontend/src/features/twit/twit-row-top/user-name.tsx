export default function UserName({ name }: { name: string }) {
  return (
    <div className="text-black hover:underline font-bold pr-1">{name}</div>
  );
}
