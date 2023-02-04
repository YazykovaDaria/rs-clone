import { Outlet } from 'react-router-dom';
import SideBar from '../../features/sidebar/SideBar';

function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto justify-between">
      <main className="sm:flex flex-none">
        <nav className="sm:w-1/4 4/4">
          <SideBar />
        </nav>
        <section className="sm:w-3/4 4/4">
          <Outlet />
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
