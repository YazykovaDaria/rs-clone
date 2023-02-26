import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Companions from '../../widgets/companions/Companions';

function Chat() {
  const { t } = useTranslation();
  return (
    <>
      <p>{t('chat.messages')}</p>
      <p>{t('chat.select')}</p>
      <div className="flex">
        <div className="w-1/4 4/4">
          <Companions />
        </div>
        <div className="w-3/4 4/4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Chat;
