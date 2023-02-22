import transformDateCreateAt from '../../../shared/lib/transformDateCreateAt';

export default function TwitDate({ thisCreatedAt }: { thisCreatedAt: string }) {
  return (
    <div className="text-gray-350">{transformDateCreateAt(thisCreatedAt)}</div>
  );
}
