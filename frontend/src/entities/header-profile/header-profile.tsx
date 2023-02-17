import IUserProfile from '../../shared/types/IUserProfile';
import HeaderDesription from './header-description';
import { useGetUserProfileQuery } from '../user/Profile/userProfileApi';
import StickyHeader from './sticky-header';
import Spiner from '../../shared/IU/spiner/spiner';
import { useGetTweetsQuery } from '../../features/twit/twitApi';

export default function HeaderProfile(
  { user }: { user: string },
  { len }: { len: string } // передаем количество твитов
) {
  const { data, isLoading } = useGetUserProfileQuery(user);
  if (isLoading) return <Spiner />;
  const {
    username,
    email,
    name,
    about,
    location,
    site,
    birthday,
    registration_date: registrationDate,
    followers,
    following,
    avatar,
  }: IUserProfile = data;

  return (
    <div className="flex flex-row flex-wrap border-b">
      <StickyHeader name={name} />
      <HeaderDesription
        username={username}
        email={email}
        name={name}
        about={about}
        location={location}
        site={site}
        birthday={birthday}
        registration_date={registrationDate}
        followers={followers}
        following={following}
        avatar={avatar}
      />
    </div>
  );
}
