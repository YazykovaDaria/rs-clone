import { useParams } from 'react-router-dom';
import HeaderProfile from '../../entities/header-profile/header-profile';
import Twit from '../../features/twit/twit';

function Profile() {
  const { user } = useParams();

  return (
    <>
      <HeaderProfile user={user || ''} />
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
