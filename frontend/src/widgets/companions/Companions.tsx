import { useTranslation } from 'react-i18next';

const Companions = () => {
  const { t } = useTranslation();

  return (
    <>
      <p>{t('chat.messages')}</p>
      <p>{t('chat.select')}</p>
      <p>user</p>
      <p>user</p>
    </>
  );
};

export default Companions;
