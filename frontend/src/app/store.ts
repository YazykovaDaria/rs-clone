import { configureStore } from '@reduxjs/toolkit';
import { userProfileApi } from '../entities/user/Profile/userProfileApi';
import { userLogin } from '../entities/user/Auth/loginApi';
import { TweetApi } from '../entities/API/TwitApi';
import { followApi } from '../entities/API/followApi';
import parentTwitSlice from '../entities/parentTwitSlice';

const store = configureStore({
  reducer: {
    [userLogin.reducerPath]: userLogin.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    [TweetApi.reducerPath]: TweetApi.reducer,
    [followApi.reducerPath]: followApi.reducer,
    parentTwit: parentTwitSlice,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      userLogin.middleware,
      userProfileApi.middleware,
      TweetApi.middleware,
      followApi.middleware
    ),
});
export default store;
