import { Outlet } from 'react-router-dom';
import Companions from '../../widgets/companions/Companions';

function Chat() {
  return (
    <div className="flex">
      <div className="w-1/4 4/4">
        <Companions />
      </div>
      <div className="w-3/4 4/4">
        <Outlet />
      </div>
    </div>
  );
}

export default Chat;
