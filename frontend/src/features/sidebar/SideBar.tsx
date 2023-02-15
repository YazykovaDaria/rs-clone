import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Nav from './Nav';
import UserWidget from '../userSidebarWidget/UserWitget';
import { ReactComponent as Logo } from '../../shared/assets/icons/icons8-twitter.svg';
import Modal from '../../shared/IU/modal/Modal';
import TwitCreator from '../twit-creator/Twit-creator';

function SideBar() {
  const { t } = useTranslation();
  const [isOpenModal, setModal] = useState(false);
  return (
    <aside className="flex flex-col justify-between sm:p-3 h-screen sticky top-0 left-0">
      <div className="flex flex-col justify-between gap-5">
        <Link to="/">
          <Logo className="hover:fill-cyan-500 fill-cyan-300 md:w-16 md:h-16 w-12 h-12" />
        </Link>

        <Nav />

        <Modal isOpen={isOpenModal} onClose={() => setModal(false)}>
          <TwitCreator close={() => setModal(false)} />
        </Modal>

        <button
          type="button"
          onClick={() => setModal(true)}
          className="aside-bnt bg-sky-400 "
        >
          {t('tweet')}
        </button>
        <button
          type="button"
          className="rounded-full m-2 bg-sky-400 sm:hidden"
          onClick={() => setModal(true)}
        >
          +
        </button>
      </div>
      <UserWidget />
    </aside>
  );
}

export default SideBar;
