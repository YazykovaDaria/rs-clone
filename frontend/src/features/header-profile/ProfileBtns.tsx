import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuth } from '../../entities/user/Auth/authContext';
import Modal from '../../shared/IU/modal/Modal';
import EditProfile from '../EditProfile/EditProfile';
import {
  useFollowMutation,
  useUnfollowMutation,
} from '../../entities/API/followApi';

type Props = {
  name: string;
};

const ProfileBtn = ({ name }: Props) => {
  const { t } = useTranslation();
  const [follow] = useFollowMutation();
  const [unfollow] = useUnfollowMutation();
  const auth = useAuth();
  let mainUsername;
  if (auth?.user) {
    mainUsername = auth.user.username;
  }

  const [isOpemModal, setModal] = useState(false);

  if (name === mainUsername) {
    return (
      <>
        <Modal isOpen={isOpemModal} onClose={() => setModal(false)}>
          <EditProfile close={() => setModal(false)} />
        </Modal>
        <button
          type="button"
          className="profile-btn border-1"
          onClick={() => setModal(true)}
        >
          {t('profile.edit')}
        </button>
      </>
    );
  }

  const following = auth?.user.following;

  const hanglerClick = (action: string): void => {
    auth?.updateFollowing(name, action);
    const body = { username: name };

    switch (action) {
      case 'follow':
        try {
          follow(body);
        } catch (err) {
          throw new Error(err);
        }
        break;

      case 'unfollow':
        try {
          unfollow(body);
        } catch (err) {
          throw new Error(err);
        }
        break;

      default:
        throw new Error(`unknown action ${action}`);
    }
  };

  if (following?.includes(name)) {
    return (
      <button
        type="button"
        className="profile-btn border-1"
        onClick={() => hanglerClick('unfollow')}
      >
        {t('profile.reading')}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="profile-btn border-1"
      onClick={() => hanglerClick('follow')}
    >
      {t('profile.read')}
    </button>
  );
};

export default ProfileBtn;
