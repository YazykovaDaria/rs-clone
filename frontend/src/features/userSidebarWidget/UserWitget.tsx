import './style.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonCloseSvg from '../../shared/ButtonCloseSvg/ButtonCloswSvg';
import Modal from '../../shared/modal/Modal';

function UserWidget() {
  const { t } = useTranslation();
  const [isOpenPopup, setPopup] = useState(false);
  const [isOpenModal, setModal] = useState(false);

  const openModal = (): void => setModal(true);

  const closeModal = (): void => setModal(false);

  const closePopup = (): void => setPopup(false);

  const togglePopup = (): void => setPopup(!isOpenPopup);

  return (
    <div className="flex flex-col-reverse sm:flex-col gap-2 cursor-pointer sm:w-11/12">
      <div className={isOpenPopup ? 'user-popup' : 'hidden'}>
        <ButtonCloseSvg close={closePopup} />
        <div className="hover:text-sky-600 hover:font-bold transition-colors">
          <button
            type="button"
            onClick={() => {
              openModal();
              closePopup();
            }}
            className="p-0"
          >
            {t('selectLng')}
          </button>
          <Modal isOpen={isOpenModal} onClose={closeModal}>
            lang
          </Modal>
        </div>

        <div className="hover:text-sky-600 cursor-pointer transition-colors">
          {t('logout')}
        </div>
      </div>

      <button type="button" className="user-aside" onClick={togglePopup}>
        <div className="w-10 h-10 min-w-[2.5rem] rounded-full border-solid border-2 border-cyan-500 transition-colors">
          <img
            src="https://randomuser.me/api/portraits/lego/6.jpg"
            alt="user"
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex-col hidden md:flex items-start p-1">
          <span className="font-bold">User name</span>
          <span className="text-gray-350">user_nickname</span>
        </div>
        <span className="hidden sm:inline-block text-lg font-bold hover:text-sky-600 transition-colors">
          ...
        </span>
      </button>
    </div>
  );
}

export default UserWidget;
