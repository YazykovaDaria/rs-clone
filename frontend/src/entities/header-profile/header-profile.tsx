import IUserProfile from '../../shared/types/IUserProfile';
import HeaderDesription from './header-description';
import { useGetUserProfileQuery } from '../user/Profile/userProfileApi';
import StickyHeader from './sticky-header';
import Spiner from '../../shared/IU/spiner/spiner';

export default function HeaderProfile({ user }: { user: string }) {
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
    tweets,
    avatar,
  }: IUserProfile = data;

  return (
    <div className="flex flex-row flex-wrap border-b">
      <StickyHeader name={name} tweets={tweets || 0} />
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
