import './style.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import UserWidget from '../userSidebarWidget/UserWitget';
import { ReactComponent as Logo } from '../../shared/assets/icons/icons8-twitter.svg';

function SideBar() {
  return (
    <aside className="flex sm:flex-col justify-between items-center p-3 sm:h-screen">
      <div className="flex sm:flex-col justify-between gap-5">
        <Link to="/">
          <Logo className="hover:fill-cyan-500 fill-cyan-300" />
        </Link>

        <Nav />
        <div className="aside-bnt">Tweet</div>
      </div>
      <UserWidget />
    </aside>
  );
}

export default SideBar;
