import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../assets/icons/icons8-twitter.svg';

const FormHeader = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-between items-center">
      <Logo className="hover:fill-cyan-500 fill-cyan-300" />
      <div className="flex gap-2">
        <button type="button">en</button>
        <button type="button">ru</button>
      </div>
    </div>
  );
};

export default FormHeader;
