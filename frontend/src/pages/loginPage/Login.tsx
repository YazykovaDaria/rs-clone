import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import FormHeader from '../../shared/IU/FormHeader/FormHeader';
import LoginForm from '../../entities/LoginForm/LoginForm';

function Login() {
  const { t } = useTranslation();

  return (
    <div className="pt-5">
      <div className="p-2 max-w-2xl m-auto text-base flex flex-col gap-5">
        <FormHeader />
        <h2 className="text-3xl text-center">{t('authLoginForm.logIn')}</h2>
        <LoginForm />

        <div className="flex justify-between text-xl text-blue-350">
          <span>{t('authLoginForm.notHave')}</span>
          <NavLink to="/auth" className="hover:text-blue-600">
            {t('authLoginForm.registration')}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
