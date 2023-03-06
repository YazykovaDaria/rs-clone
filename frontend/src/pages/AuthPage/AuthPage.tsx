import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuhtForm from '../../features/AuthForm/AuthForm';
import FormHeader from '../../shared/IU/FormHeader/FormHeader';

function Auth() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="p-2 max-w-3xl m-auto text-base flex flex-col gap-5 mt-4 h-screen">
      <FormHeader />
      <h2 className="text-3xl text-center">
        {t('authLoginForm.createAccount')}
      </h2>
      <AuhtForm />
      <div className="p-1">
        <button
          className="text-lg text-blue-800 hover:text-blue-350 dark:text-gray-300 dark:hover:text-blue-350"
          type="button"
          onClick={goBack}
        >{`⟵ ${t('goBack')}`}</button>
      </div>
    </div>
  );
}

export default Auth;
