import { useTranslation } from 'react-i18next';
import IUserProfile from '../../shared/types/IUserProfile';
import transformDateBirth from '../../shared/lib/transformDateBirth';
import transformDateJoin from '../../shared/lib/transformDateJoin';
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
            className="rounded-full object-contain bg-white sm:w-32 sm:h-32 w-24 h-24"
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
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h5 fill-gray-350"
            >
              <g>
                <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z" />
              </g>
            </svg>
            <span className="text-gray-350 ml-1 mr-5">
              {t('profile.join')} {transformDateJoin(registrationDate)}
            </span>
          </div>
          <div className="flex flex-row flex-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h5 fill-gray-350"
            >
              <path d="M7.75 11.083C7.336 11.083 7 10.747 7 10.333C7 7.393 9.243 5 12 5C12.414 5 12.75 5.336 12.75 5.75C12.75 6.164 12.414 6.5 12 6.5C10.07 6.5 8.5 8.22 8.5 10.333C8.5 10.747 8.164 11.083 7.75 11.083Z" />
              <path d="M20.75 10.333C20.75 5.323 16.825 1.25 12 1.25C7.175 1.25 3.25 5.324 3.25 10.333C3.25 14.938 6.57 18.745 10.855 19.33L9.155 21.16C9.018 21.305 8.982 21.517 9.062 21.7C9.142 21.882 9.322 22 9.522 22H14.479C14.677 22 14.857 21.882 14.936 21.7C15.016 21.517 14.98 21.305 14.844 21.16L13.144 19.33C17.429 18.745 20.749 14.938 20.749 10.333H20.75ZM12 17.917C8.002 17.917 4.75 14.515 4.75 10.333C4.75 6.151 8.002 2.75 12 2.75C15.998 2.75 19.25 6.15 19.25 10.333C19.25 14.516 15.998 17.917 12 17.917Z" />
            </svg>
            <span className="text-gray-350 ml-1 mr-5">
              {t('profile.born')} {transformDateBirth(birthday)}
            </span>
          </div>

          {location && <DescriptionLocation location={location} />}
          {site && <DescriptionLink site={site} />}
        </div>
        <div className="flex flex-row w-full items-start">
          <div className="text-gray-350 mr-3 hover:underline cursor-pointer">
            <span className="text-black font-bold pr-1">{following}</span>
            {t('profile.following')}
          </div>
          <div className="text-gray-350 mr-3 hover:underline cursor-pointer">
            <span className="text-black font-bold pr-1">{followers}</span>
            {t('profile.followers')}
          </div>
        </div>
      </div>
    </div>
  );
}
