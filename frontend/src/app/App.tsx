import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../processes/localization/i18next';
// import i18n from "./i18n";
// import { useTranslation } from 'react-i18next';

import Login from '../pages/loginPage/Login';
import Main from '../pages/MainPage/MainPage';
import Auth from '../pages/AuthPage/AuthPage';
import Profile from '../pages/ProfilePage/ProfilePage';
import NotFound from '../pages/NotFound/NotFound';
import './style.css';
import Chat from '../pages/ChatPage/Chat';
import Layout from '../widgets/layout/Layout';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {/* <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
    <button onClick={() => i18n.changeLanguage("en")}>en</button>
      <p>{t('home')}</p> */}

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
    </I18nextProvider>
  );
}

export default App;
