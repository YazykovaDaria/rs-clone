import { useTranslation } from 'react-i18next';
import AuhtForm from '../../entities/AuthForm/AuthForm';
import FormHeader from '../../shared/IU/FormHeader/FormHeader';

function Auth() {
  const { t } = useTranslation();

  return (
    <div className="p-2 max-w-3xl m-auto text-base flex flex-col gap-5 mt-4">
      <FormHeader />
      <h2 className="text-3xl text-center">
        {t('authLoginForm.createAccount')}
      </h2>
      <AuhtForm />
    </div>
  );
}

export default Auth;
