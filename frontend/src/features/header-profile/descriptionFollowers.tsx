import { useState } from 'react';
import { Followers } from '../../shared/types/IUserProfile';
import Modal from '../../shared/IU/modal/Modal';
import FollowContainer from '../Followers/Followers';

type Props = {
  followers: Followers[];
  name: string;
};

const DescriptionFollowers = ({ followers, name }: Props) => {
  const [isModal, setModal] = useState(false);

  return (
    <>
      <Modal isOpen={isModal} onClose={() => setModal(false)}>
        <div
          className="flex flex-col justify-start gap-2"
          onClick={() => setModal(false)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setModal(false);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <p className="text-xl text-center">{`${name} ${followers.length}`}</p>
          <FollowContainer followers={followers} />
        </div>
      </Modal>
      <div
        onClick={() => setModal(true)}
        className="text-gray-350 mr-3 hover:underline cursor-pointer"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setModal(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <span className="text-black font-bold pr-1 dark:text-gray-300">
          {followers.length}
        </span>
        {name}
      </div>
    </>
  );
};

export default DescriptionFollowers;
