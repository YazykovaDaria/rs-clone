import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuth } from '../user/Auth/authContext';
import Modal from '../../shared/IU/modal/Modal';
import EditProfile from '../../features/EditProfile/EditProfile';

type Props = {
  name: string;
};

const ProfileBtn = ({ name }: Props) => {
  const { t } = useTranslation();
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

  return (
    <button type="button" className="profile-btn border-1">
      {t('profile.read')}
    </button>
  );
};

export default ProfileBtn;
