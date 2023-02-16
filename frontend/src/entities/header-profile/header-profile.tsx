import IUserProfile from '../../shared/types/IUserProfile';
import HeaderDesription from './header-description';
import { useGetUserProfileQuery } from './userProfileApi';
import StickyHeader from './sticky-header';
import Spiner from '../../shared/IU/spiner/spiner';

export default function HeaderProfile({ user }: { user: string }) {
  const { data, isLoading } = useGetUserProfileQuery(user);
  console.log(data);
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
  }: IUserProfile = data;

  return (
    // todo надо прокидывать в StickyHeader пропсы количество твитов
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
      />
    </div>
  );
}
