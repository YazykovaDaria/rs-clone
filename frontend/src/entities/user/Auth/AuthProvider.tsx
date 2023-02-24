import React, { useMemo, useState, FC, PropsWithChildren } from 'react';
import { AuthContext } from './authContext';
import { SaveUser } from '../../../shared/types/user';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const storage = localStorage.getItem('user');
  let currentUser;
  if (storage) {
    currentUser = JSON.parse(storage);
  }

  const [user, setUser] = useState(currentUser || null);

  const logIn = (userData: SaveUser) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const authData = useMemo(() => {
    const updateUserData = <T,>(newData: T) => {
      const savedData = localStorage.getItem('user');
      if (savedData) {
        const data = { ...JSON.parse(savedData), ...newData };
        logIn(data);
      }
    };
    const updateFollowing = (newFollowing: string, action: string): void => {
      const savedData = localStorage.getItem('user');
      if (savedData) {
        const data = JSON.parse(savedData);
        const { following } = data;
        if (action === 'follow') {
          following.push(newFollowing);
        } else if (action === 'unfollow') {
          data.following = following.filter(
            (val: string) => val !== newFollowing
          );
        }
        logIn(data);
      }
    };

    return {
      logIn,
      logOut,
      updateUserData,
      updateFollowing,
      user,
    };
  }, [user]);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
