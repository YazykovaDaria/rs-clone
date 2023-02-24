import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Picture } from '../../shared/assets/icons/photo-camera-svgrepo-com.svg';
import { useUpdateUserAvatarMutation } from '../../entities/user/Profile/userProfileApi';
import { useAuth } from '../../entities/user/Auth/authContext';
import SameModal from '../../shared/IU/modal/SameModal';
import PreviewImage from '../../shared/IU/PreviewImg';
import { getImgForServer } from '../../shared/lib/imgHelper';

const EditAvatar = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [isOpenModal, setModal] = useState(false);
  const [isSubmit, setSubmit] = useState(false);
  const { t } = useTranslation();
  const [update] = useUpdateUserAvatarMutation();
  const auth = useAuth();

  const updateAvatar = async () => {
    setSubmit(true);
    if (avatar) {
      const data = getImgForServer(avatar, avatar?.name);
      try {
        await update(data);

        const reader = new FileReader();
        reader.readAsDataURL(avatar);
        reader.onload = () => {
          const src = reader.result;
          auth?.updateUserData({ avatar: src });
        };

        setModal(false);
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  return (
    <>
      <SameModal isOpen={isOpenModal} onClose={() => setModal(false)}>
        <div className="sm:min-w-400">
          <div className="flex justify-between">
            <button
              type="button"
              className="profile-btn"
              disabled={isSubmit}
              onClick={updateAvatar}
            >
              {t('save')}
            </button>
          </div>
          <PreviewImage
            files={[avatar as File]}
            close={() => setModal(false)}
          />
        </div>
      </SameModal>
      <div className="flex justify-center relative">
        <img
          src={auth?.user.avatar || ''}
          alt="avatar"
          className="profile-avatar"
        />
        <label
          htmlFor="img"
          className="w-8 h-8 flex items-center justify-center absolute top-9 bg-zinc-500 hover:bg-zinc-600 rounded-full"
        >
          <input
            id="img"
            name="img"
            onChange={(e) => {
              const target = e.currentTarget as HTMLInputElement;
              if (target.files) {
                setAvatar(target.files[0]);
                setModal(true);
              }
            }}
            type="file"
            accept=".jpg, .jpeg, .png"
            className="invisible w-[1px] h-[1px]"
          />

          <Picture className="w-6 h-6 cursor-pointer hover:stroke-cyan-500 stroke-sky-400 hover:stroke-2" />
        </label>
      </div>
    </>
  );
};

export default EditAvatar;
