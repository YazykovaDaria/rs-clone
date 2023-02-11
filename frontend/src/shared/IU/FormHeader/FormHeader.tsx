import './style.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/icons8-twitter.svg';

const FormHeader = () => {
  const { i18n } = useTranslation();
  const currentLang = localStorage.getItem('lng') || 'en';
  const [lang, setLang] = useState(currentLang);

  const changeLang = (lng: string): void => {
    setLang(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <div className="flex justify-between items-center">
      <Logo className="fill-cyan-300" />
      <div className="flex gap-1">
        <button
          disabled={lang === 'en'}
          onClick={() => changeLang('en')}
          className="btn-lng"
          type="button"
        >
          en
        </button>
        <button
          onClick={() => changeLang('ru')}
          className="btn-lng"
          disabled={lang === 'ru'}
          type="button"
        >
          ru
        </button>
      </div>
    </div>
  );
};

export default FormHeader;
