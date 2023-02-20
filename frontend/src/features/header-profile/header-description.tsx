import { useTranslation } from 'react-i18next';
import IUserProfile from '../../shared/types/IUserProfile';
import transformDateBirth from '../../shared/lib/transformDateBirth';
import transformDateJoin from '../../shared/lib/transformDateJoin';
import { ReactComponent as JoinIcon } from '../../shared/assets/icons/join-icon.svg';
import { ReactComponent as BornIcon } from '../../shared/assets/icons/born-icon.svg';
import DescriptionLink from './descriptionLink';
import DescriptionLocation from './descriptionLocation';
import DescriptionAbout from './decriptionAbout';
import ProfileBtn from './ProfileBtns';

export default function HeaderDesription({
  username,
  name,
  about,
  location,
  site,
  birthday,
  registration_date: registrationDate,
  followers,
  following,
  avatar,
}: IUserProfile) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-full bg-slate-200 h-[200px] mt-[53px]" />
      <div className="w-full p-4 flex justify-between max-h-20">
        <div className="sm:-top-20 -top-16 sm:w-32 sm:h-32 w-24 h-24 cursor-pointer flex items-center justify-center transition-colors duration-200 relative mr-3">
          <img
            src={
              avatar.imageType && avatar.imageData
                ? `data:${avatar.imageType};base64, ${avatar.imageData}`
                : '../../../public/icon/unknown-user.svg'
            }
            alt="avatar"
            className="profile-avatar"
          />
          <div className="absolute border-4 border-white border-solid hover:bg-black/10 top-0 bottom-0 right-0 left-0 rounded-full transition-colors duration-200" />
        </div>
        <div>
          <ProfileBtn name={username} />
        </div>
      </div>
      <div className="w-full p-4 flex flex-col">
        <div className="flex flex-col w-full items-start mb-3">
          <h2 className="text-black font-bold text-xl">{name}</h2>
          <div className="text-gray-350">@{username}</div>
        </div>

        {about && <DescriptionAbout about={about} />}

        <div className="flex flex-row w-full items-start mb-3 lg:flex-nowrap flex-wrap">
          <div className="flex flex-row flex-nowrap">
            <JoinIcon />
            <span className="text-gray-350 ml-1 mr-5">
              {t('profile.join')} {transformDateJoin(registrationDate)}
            </span>
          </div>
          <div className="flex flex-row flex-nowrap">
            <BornIcon />
            <span className="text-gray-350 ml-1 mr-5">
              {t('profile.born')} {transformDateBirth(birthday)}
            </span>
          </div>

          {location && <DescriptionLocation location={location} />}
          {site && <DescriptionLink site={site} />}
        </div>
        <div className="flex flex-row w-full items-start">
          <div className="text-gray-350 mr-3 hover:underline cursor-pointer">
            <span className="text-black font-bold pr-1">
              {following.length}
            </span>
            {t('profile.following')}
          </div>
          <div className="text-gray-350 mr-3 hover:underline cursor-pointer">
            <span className="text-black font-bold pr-1">
              {followers.length}
            </span>
            {t('profile.followers')}
          </div>
        </div>
      </div>
    </div>
  );
}
