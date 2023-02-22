/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Followers } from '../../shared/types/IUserProfile';
import Modal from '../../shared/IU/modal/Modal';
import FollowContainer from '../Followers/Followers';

type Props = {
  followers: Followers[];
};

const DescriptionFollowers = ({ followers }: Props) => {
  const { t } = useTranslation();
  const [isModal, setModal] = useState(false);

  return (
    <>
      <Modal isOpen={isModal} onClose={() => setModal(false)}>
        <div
          className="flex flex-col justify-center items-center gap-2"
          onClick={() => setModal(false)}
        >
          <p className="text-xl">{`${t('profile.followers')} ${
            followers.length
          }`}</p>
          <FollowContainer followers={followers} />
        </div>
      </Modal>
      <div
        onClick={() => setModal(true)}
        className="text-gray-350 mr-3 hover:underline cursor-pointer"
      >
        <span className="text-black font-bold pr-1">{followers.length}</span>
        {t('profile.followers')}
      </div>
    </>
  );
};

export default DescriptionFollowers;
