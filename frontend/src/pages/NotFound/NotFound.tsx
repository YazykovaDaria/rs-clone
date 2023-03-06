import { useTranslation } from 'react-i18next';
import { useNavigate, NavLink } from 'react-router-dom';
import { defaultUserSrc } from '../../shared/constants/common';

function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="p-2 max-w-3xl m-auto flex flex-col justify-center items-center gap-5 mt-10 h-screen">
      <img
        src={defaultUserSrc}
        alt="bird"
        className="sm:w-32 sm:h-32 w-24 h-24"
      />
      <p className="text-xl font-bold">{t('404')}</p>
      <div className="flex gap-9">
        <button
          className="text-blue-800 hover:text-blue-350 dark:text-gray-300 dark:hover:text-blue-350"
          type="button"
          onClick={() => navigate(-1)}
        >{`⟵ ${t('goBack')}`}</button>
        <NavLink
          to="/"
          className="text-blue-800 hover:text-blue-350 dark:text-gray-300 dark:hover:text-blue-350"
        >{`${t('go main')} ⟶`}</NavLink>
      </div>
    </div>
  );
}

export default NotFound;
