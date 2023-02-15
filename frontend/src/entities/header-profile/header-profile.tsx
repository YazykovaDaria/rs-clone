import IUserProfile from '../../shared/types/IUserProfile';
import HeaderDesription from './header-description';
import StickyHeader from './sticky-header';

export default function HeaderProfile({
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
}: IUserProfile) {
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
      />
    </div>
  );
}
