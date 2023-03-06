export const baseUrl =
  'https://rs-clone-twitter-api.onrender.com/api/' as const;

const getToken = (): string => {
  const user = localStorage.getItem('user');
  if (user) {
    const res = JSON.parse(user);
    const { accessToken } = res;
    return accessToken;
  }
  return '';
};

export const token = getToken();
