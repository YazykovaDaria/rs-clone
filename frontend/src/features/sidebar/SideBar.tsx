import './style.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import UserWidget from '../userSidebarWidget/UserWitget';
import { ReactComponent as Logo } from '../../../public/icon/icons8-twitter.svg';

function SideBar() {
  return (
    <aside className="flex sm:flex-col justify-between p-3 sm:h-screen">
      <div className="flex sm:flex-col justify-between gap-5">
        <Link to="/" className="hover:bg-slate-300 hover:rounded-full">
          <Logo />
        </Link>

        <Nav />

        <div className="aside-bnt">Tweet</div>
      </div>
      <UserWidget />
    </aside>
  );
}

export default SideBar;
