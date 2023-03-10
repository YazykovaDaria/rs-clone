import './style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../entities/user/Auth/authContext';
import ButtonCloseSvg from '../../shared/IU/ButtonCloseSvg/ButtonCloswSvg';
import SelectLang from '../selectLanguage/SelectLanguage';
import Logout from '../logout/Logout';
import Modal from '../../shared/IU/modal/Modal';
import SwitchTheme from '../../shared/IU/SwitchTheme';

function UserWidget() {
  const { t } = useTranslation();
  const [isOpenPopup, setPopup] = useState(false);
  const [isOpenModalLang, setModalLang] = useState(false);
  const [isOpenModalLogout, setModalLogout] = useState(false);
  const auth = useAuth();
  const userData = {
    name: '',
    username: '',
    avatar: '',
  };
  if (auth?.user) {
    Object.assign(userData, auth.user);
  }

  const closePopup = (): void => setPopup(false);

  const togglePopup = (): void => setPopup(!isOpenPopup);

  return (
    <div className="flex flex-col gap-2 cursor-pointer sm:w-11/12">
      <div className={isOpenPopup ? 'user-popup' : 'hidden'}>
        <ButtonCloseSvg close={closePopup} />
        <SwitchTheme />
        <div className="hover:text-sky-600 hover:font-bold transition-colors dark:hover:text-cyan-200">
          <button
            type="button"
            onClick={() => {
              setModalLang(true);
              closePopup();
            }}
            className="p-0"
          >
            {t('selectLng')}
          </button>
          <Modal isOpen={isOpenModalLang} onClose={() => setModalLang(false)}>
            <SelectLang close={() => setModalLang(false)} />
          </Modal>
        </div>
        <div className="hover:text-sky-600 cursor-pointer transition-colors dark:hover:text-cyan-200">
          <button
            type="button"
            onClick={() => {
              setModalLogout(true);
              closePopup();
            }}
            className="p-0"
          >
            {t('logout')}
          </button>
          <Modal
            isOpen={isOpenModalLogout}
            onClose={() => setModalLogout(false)}
          >
            <Logout close={() => setModalLogout(false)} />
          </Modal>
        </div>
      </div>

      <button type="button" className="user-aside" onClick={togglePopup}>
        <div className="w-10 h-10 min-w-[2.5rem] rounded-full border-solid border-2 border-cyan-500 transition-colors">
          <img
            src={userData.avatar}
            alt="user"
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex-col hidden md:flex items-start p-1 self-start">
          <span className="font-bold">{userData.name}</span>
          <span className="text-gray-350 dark:text-gray-200">{`@${userData.username}`}</span>
        </div>
        <span className="hidden sm:inline-block text-lg font-bold hover:text-sky-600 transition-colors">
          ...
        </span>
      </button>
    </div>
  );
}

export default UserWidget;
