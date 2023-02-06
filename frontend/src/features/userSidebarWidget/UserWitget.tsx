import './style.css';
import { useState } from 'react';
import ButtonCloseSvg from '../../shared/ButtonCloseSvg/ButtonCloswSvg';
import Modal from '../../shared/modal/Modal';

function UserWidget() {
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
        <div className="hover:text-sky-600 hover:font-bold">
          <button
            type="button"
            onClick={() => {
              openModal();
              closePopup();
            }}
            className="p-0"
          >
            Switch language
          </button>
          <Modal isOpen={isOpenModal} onClose={closeModal}>
            lang
          </Modal>
        </div>

        <div className="hover:text-sky-600 hover:font-bold cursor-pointer">
          Logout
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
