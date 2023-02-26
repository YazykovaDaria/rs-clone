import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '../entities/user/Auth/authContext';

import Login from '../pages/loginPage/Login';
import Main from '../pages/MainPage/MainPage';
import Auth from '../pages/AuthPage/AuthPage';
import Profile from '../pages/ProfilePage/ProfilePage';
import NotFound from '../pages/NotFound/NotFound';
import './style.css';
import Chat from '../pages/ChatPage/Chat';
import Layout from '../widgets/layout/Layout';
import Dialogs from '../widgets/dialogs/Dialogs';

const MainRoute: FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth?.user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <MainRoute>
                <Main />
              </MainRoute>
            }
          />

          <Route path="profile/:user" element={<Profile />} />
          <Route path="chat" element={<Chat />}>
            <Route path=":user" element={<Dialogs />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
