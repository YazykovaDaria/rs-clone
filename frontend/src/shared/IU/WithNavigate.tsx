/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

type Props = {
  url: string;
  children: React.ReactNode;
};

const WithNavigate = ({ url, children }: Props) => {
  const navigate = useNavigate();

  return <div onClick={() => navigate(url)}>{children}</div>;
};

export default WithNavigate;
