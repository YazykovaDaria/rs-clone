import { useParams } from 'react-router-dom';
import HeaderProfile from '../../entities/header-profile/header-profile';
import Twit from '../../features/twit/twit';

function Profile() {
  // user name for server request
  const { user } = useParams();
  console.log(user);

  return (
    <>
      <HeaderProfile />
      <Twit />
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
