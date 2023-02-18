import { ReactComponent as LocationIcon } from '../../shared/assets/icons/location-icon.svg';

export default function DescriptionLocation({
  location,
}: {
  location: string;
}) {
  return (
    <div className="flex flex-row flex-nowrap">
      <LocationIcon />
      <span className="text-gray-350 ml-1 mr-5">{location}</span>
    </div>
  );
}
