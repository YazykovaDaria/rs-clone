import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../entities/user/Auth/authContext';
import { OptionalCloseProps } from '../../shared/types/props';

const Logout = ({ close }: OptionalCloseProps) => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = () => {
    auth?.logOut();
    navigate('/');
  };

  return (
    <div className="flex flex-col gap-5 pt-2 text-xl">
      <p>{t('leaveTreetter')}</p>
      <div className="flex justify-between">
        <button
          type="button"
          className="bg-blue-350 hover:bg-green-350 rounded-xl px-4 py-1 text-white"
          onClick={close}
        >
          {t('cancel')}
        </button>
        <button
          type="button"
          className="bg-blue-350 hover:bg-green-350 rounded-xl px-4 py-1 text-white"
          onClick={logout}
        >
          {t('logout')}
        </button>
      </div>
    </div>
  );
};

export default Logout;
