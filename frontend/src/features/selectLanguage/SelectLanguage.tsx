import { useTranslation } from 'react-i18next';
import { OptionalCloseProps } from '../../shared/types/props';

const SelectLang = ({ close }: OptionalCloseProps) => {
  const { t, i18n } = useTranslation();

  const changeLang = (lng: string): void => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    if (close) {
      close();
    }
  };

  return (
    <div className="flex flex-col gap-3 text-lg p-2 items-center">
      <h3>{t('selectLng')}</h3>
      <button
        onClick={() => changeLang('en')}
        type="button"
        className="bg-slate-500 hover:bg-cyan-600 rounded-full text-white w-40"
      >
        en
      </button>
      <button
        onClick={() => changeLang('ru')}
        type="button"
        className="bg-slate-500 hover:bg-cyan-600 rounded-full text-white w-40"
      >
        ru
      </button>
    </div>
  );
};

export default SelectLang;
