import { useParams } from 'react-router-dom';
import HeaderProfile from '../../entities/header-profile/header-profile';
import { useGetUserProfileQuery } from '../../entities/header-profile/userProfileApi';
import Twit from '../../features/twit/twit';
import Spiner from '../../shared/IU/spiner/spiner';
import IUserProfile from '../../shared/types/IUserProfile';

function Profile() {
  const { user } = useParams();
  const { data, isLoading } = useGetUserProfileQuery(user || '');
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
    <>
      <HeaderProfile
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
      <Twit />
      <Twit />
      <Twit />
      <Twit />
      <Twit />
      <Twit />
    </>
  );
}

export default Profile;
