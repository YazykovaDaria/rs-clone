import { Outlet } from 'react-router-dom';
import Footer from '../../shared/IU/footer';
import SideBar from '../../features/sidebar/SideBar';

function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto justify-between">
      <main className="flex">
        <nav className="w-1/4 4/4">
          <SideBar />
        </nav>
        <section className="w-full border-x">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
