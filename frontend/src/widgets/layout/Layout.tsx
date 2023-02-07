import { Outlet } from 'react-router-dom';
import Footer from '../../entities/footer';
import SideBar from '../../features/sidebar/SideBar';

function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto justify-between">
      <main className="flex">
        <nav className="w-1/4 4/4">
          <SideBar />
        </nav>
        <section className="w-full">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
