import { configureStore } from '@reduxjs/toolkit';
import { userProfileApi } from '../entities/user/Profile/userProfileApi';
import { userLogin } from '../entities/user/Auth/loginApi';
import { getTweetApi } from '../features/twit/twitApi';

const store = configureStore({
  reducer: {
    [userLogin.reducerPath]: userLogin.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [getTweetApi.reducerPath]: getTweetApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      userLogin.middleware,
      userProfileApi.middleware,
      getTweetApi.middleware
    ),
});

export default store;
