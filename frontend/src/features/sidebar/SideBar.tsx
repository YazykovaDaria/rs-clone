import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Nav from './Nav';
import UserWidget from '../userSidebarWidget/UserWitget';
import { ReactComponent as Logo } from '../../shared/assets/icons/icons8-twitter.svg';
import { ReactComponent as Pen } from '../../shared/assets/icons/feather-pen_icon-icons.com_64932.svg';
import SameModal from '../../shared/IU/modal/SameModal';
import TwitCreator from '../twit-creator/Twit-creator';
import ButtonCloseSvg from '../../shared/IU/ButtonCloseSvg/ButtonCloswSvg';

function SideBar() {
  const { t } = useTranslation();
  const [isOpenModal, setModal] = useState(false);
  return (
    <aside className="flex flex-col justify-between sm:p-3 h-screen sticky top-0 left-0 z-40">
      <div className="flex flex-col justify-between gap-5">
        <Link to="/">
          <Logo className="hover:fill-cyan-500 fill-cyan-300 md:w-16 md:h-16 w-12 h-12" />
        </Link>

        <Nav />

        <SameModal isOpen={isOpenModal} onClose={() => setModal(false)}>
          <div className="relative">
            <ButtonCloseSvg close={() => setModal(false)} />
            <TwitCreator close={() => setModal(false)} />
          </div>
        </SameModal>

        <button
          type="button"
          onClick={() => setModal(true)}
          className="aside-bnt bg-sky-400 "
        >
          {t('tweet')}
        </button>
        <button
          type="button"
          className="rounded-full hover:bg-cyan-500 py-1 m-2 bg-sky-400 sm:hidden flex justify-center"
          onClick={() => setModal(true)}
        >
          <Pen className="fill-white" />
        </button>
      </div>
      <UserWidget />
    </aside>
  );
}

export default SideBar;
