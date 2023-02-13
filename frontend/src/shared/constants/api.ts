export const baseUrl =
  'https://rs-clone-twitter-api-production.up.railway.app/api/' as const;

const getToken = (): string => {
  const user = localStorage.getItem('user');
  if (user) {
    const res = JSON.parse(user);
    const { token } = res;
    return token;
  }
  return '';
};

export const token = getToken();
