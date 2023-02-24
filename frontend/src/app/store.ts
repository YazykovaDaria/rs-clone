import { configureStore } from '@reduxjs/toolkit';
import { userProfileApi } from '../entities/user/Profile/userProfileApi';
import { userLogin } from '../entities/user/Auth/loginApi';
import { TweetApi } from '../entities/API/TwitApi';

const store = configureStore({
  reducer: {
    [userLogin.reducerPath]: userLogin.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [TweetApi.reducerPath]: TweetApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      userLogin.middleware,
      userProfileApi.middleware,
      TweetApi.middleware
    ),
});

export default store;
