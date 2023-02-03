import { Outlet } from 'react-router-dom';
import SideBar from '../../features/sidebar/SideBar';

function Layout() {
  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
