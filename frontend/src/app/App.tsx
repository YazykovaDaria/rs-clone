import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/loginPage/Login';
import Main from '../pages/MainPage/MainPage';
import Auth from '../pages/AuthPage/AuthPage';
import Profile from '../pages/ProfilePage/ProfilePage';
import NotFound from '../pages/NotFound/NotFound';
import Chat from '../pages/ChatPage/Chat';
import Layout from '../widgets/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="auth" element={<Auth />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
