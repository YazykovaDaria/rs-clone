import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <aside>
      <Link to="/">Main</Link>
      <Link to="/profile">Profile</Link>
      <button type="button">tweet</button>
    </aside>
  );
}

export default SideBar;
