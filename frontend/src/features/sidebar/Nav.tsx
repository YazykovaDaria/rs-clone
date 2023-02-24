import { NavLink } from 'react-router-dom';
import './style.css';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Chat } from '../../shared/assets/icons/chat.svg';
import { ReactComponent as Profile } from '../../shared/assets/icons/profile.svg';
import { ReactComponent as Home } from '../../shared/assets/icons/home.svg';
import { useAuth } from '../../entities/user/Auth/authContext';

function Nav() {
  const { t } = useTranslation();
  let name = '';
  const auth = useAuth();
  if (auth?.user) {
    name = auth.user.username;
  }
  return (
    <ul className="flex gap-4 sm:gap-3 flex-col justify-between sm:flex-col items-center sm:items-start">
      <li>
        <NavLink to="/" className="aside-link px-2">
          <Home />
          <p className="hidden sm:block text-xl">{t('nav.home')}</p>
        </NavLink>
      </li>
      <li>
        <NavLink to={`profile/${name}`} className="aside-link px-2">
          <Profile />
          <p className="hidden sm:block text-xl">{t('nav.profile')}</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/chat" className="aside-link px-2">
          <Chat />
          <p className="hidden sm:block text-xl">{t('nav.messages')}</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
