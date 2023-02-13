import './style.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Nav from './Nav';
import UserWidget from '../userSidebarWidget/UserWitget';
import { ReactComponent as Logo } from '../../shared/assets/icons/icons8-twitter.svg';

function SideBar() {
  const { t } = useTranslation();
  return (
    <aside className="flex flex-col justify-between sm:p-3 h-screen sticky top-0 left-0">
      <div className="flex flex-col justify-between gap-5">
        <Link to="/">
          <Logo className="hover:fill-cyan-500 fill-cyan-300 md:w-16 md:h-16 w-12 h-12" />
        </Link>

        <Nav />
        <div className="aside-bnt">{t('tweet')}</div>
      </div>
      <UserWidget />
    </aside>
  );
}

export default SideBar;
