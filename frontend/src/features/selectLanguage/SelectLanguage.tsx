import { useTranslation } from 'react-i18next';

type SelectLangProps = {
  // eslint-disable-next-line react/require-default-props
  close?: () => void;
};

const SelectLang = ({ close }: SelectLangProps) => {
  const { t, i18n } = useTranslation();

  const changeLang = (lng: string): void => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    if (close) {
      close();
    }
  };

  return (
    <div className="flex flex-col gap-3 text-lg p-2">
      <h3>{t('selectLng')}</h3>
      <button
        onClick={() => changeLang('en')}
        type="button"
        className="bg-slate-500 hover:bg-cyan-600 rounded-full text-white"
      >
        en
      </button>
      <button
        onClick={() => changeLang('ru')}
        type="button"
        className="bg-slate-500 hover:bg-cyan-600 rounded-full text-white"
      >
        ru
      </button>
    </div>
  );
};

export default SelectLang;
