import './style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonCloseSvg from '../../shared/IU/ButtonCloseSvg/ButtonCloswSvg';
import SelectLang from '../selectLanguage/SelectLanguage';
import Modal from '../../shared/IU/modal/Modal';

function UserWidget() {
  const { t } = useTranslation();
  const [isOpenPopup, setPopup] = useState(false);
  const [isOpenModalLang, setModalLang] = useState(false);
  const [isOpenModalLogout, setModalLogout] = useState(false);

  const closePopup = (): void => setPopup(false);

  const togglePopup = (): void => setPopup(!isOpenPopup);

  return (
    <div className="flex flex-col-reverse sm:flex-col gap-2 cursor-pointer sm:w-11/12">
      <div className={isOpenPopup ? 'user-popup' : 'hidden'}>
        <ButtonCloseSvg close={closePopup} />

        <div className="hover:text-sky-600 hover:font-bold">
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

        <div className="hover:text-sky-600 hover:font-bold cursor-pointer">
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
            <p>{t('logout')}</p>
          </Modal>
        </div>
      </div>

      <button type="button" className="user-aside" onClick={togglePopup}>
        <div className="w-10 h-10 rounded-full border-solid border-2 border-cyan-500 " />
        <div className="flex-col hidden md:flex">
          <span>User name</span>
          <span className="text-slate-300">user_nickname</span>
        </div>
        <span className="hidden sm:inline-block text-lg">...</span>
      </button>
    </div>
  );
}

export default UserWidget;
