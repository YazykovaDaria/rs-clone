import transformDateCreateAt from '../../../shared/lib/transformDateCreateAt';

export default function TwitDate({ createdAt }: { createdAt: string }) {
  return (
    <div className="text-gray-350 hover:underline">
      {transformDateCreateAt(createdAt)}
    </div>
  );
}
