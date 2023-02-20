import { configureStore } from '@reduxjs/toolkit';
import { userProfileApi } from '../entities/user/Profile/userProfileApi';
import { userLogin } from '../entities/user/Auth/loginApi';
import { TweetApi } from '../entities/API/TwitApi';
import { LikeApi } from '../features/twit/API/LikeApi';
import { followApi } from '../entities/API/followApi';

const store = configureStore({
  reducer: {
    [userLogin.reducerPath]: userLogin.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [TweetApi.reducerPath]: TweetApi.reducer,
    [LikeApi.reducerPath]: LikeApi.reducer,
    [followApi.reducerPath]: followApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      userLogin.middleware,
      userProfileApi.middleware,
      TweetApi.middleware,
      LikeApi.middleware,
      followApi.middleware
    ),
});

export default store;
