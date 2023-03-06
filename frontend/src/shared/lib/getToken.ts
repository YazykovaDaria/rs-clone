const getToken = (): string => {
  const user = localStorage.getItem('user');
  if (user) {
    const res = JSON.parse(user);
    const { accessToken } = res;
    return accessToken;
  }
  return '';
};

export default getToken;
