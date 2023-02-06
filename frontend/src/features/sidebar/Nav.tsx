import { NavLink } from 'react-router-dom';
import './style.css';
import { ReactComponent as Chat } from '../../shared/assets/icons/chat.svg';
import { ReactComponent as Profile } from '../../shared/assets/icons/profile.svg';
import { ReactComponent as Home } from '../../shared/assets/icons/home.svg';

function Nav() {
  return (
    <ul className="flex gap-4 sm:gap-3 flex-row justify-between sm:flex-col">
      <li>
        <NavLink to="/" className="aside-link">
          <Home />
          <p className="hidden sm:block text-xl">Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="aside-link">
          <Profile />
          <p className="hidden sm:block text-xl">Profile</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/chat" className="aside-link">
          <Chat />
          <p className="hidden sm:block text-xl">Messages</p>
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
