import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import store from './store';
import i18n from '../shared/locales/i18next';

import AuthProvider from '../entities/user/Auth/AuthProvider';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
