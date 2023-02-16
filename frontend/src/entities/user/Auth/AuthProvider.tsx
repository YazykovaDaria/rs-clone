import React, { useMemo, useState, FC, PropsWithChildren } from 'react';
import { AuthContext } from './authContext';
import { saveUser } from '../../../shared/types/user';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const storage = localStorage.getItem('user');
  let currentUser;
  if (storage) {
    currentUser = JSON.parse(storage).userData;
  }

  const [user, setUser] = useState(
    currentUser
      ? { username: currentUser.username, name: currentUser.name }
      : null
  );

  const logIn = (userData: saveUser) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const authData = useMemo(() => {
    const getUsername = () => (user?.username ? user.username : '');
    return {
      logIn,
      logOut,
      getUsername,
      user,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
