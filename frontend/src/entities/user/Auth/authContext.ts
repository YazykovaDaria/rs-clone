import { createContext, useContext } from 'react';
import { SaveUser } from '../../../shared/types/user';

type Context = {
  logIn: (userData: SaveUser) => void;
  logOut: () => void;
  updateUserData: <T>(newData: T) => void;
  updateFollowing: (newFollowing: string, action: string) => void;
  user: SaveUser;
};

export const AuthContext = createContext<Context | null>(null);

export const useAuth = () => useContext(AuthContext);
