import { configureStore } from '@reduxjs/toolkit';
import { userProfileApi } from '../entities/header-profile/userProfileApi';
import { userLogin } from '../entities/user/Auth/loginApi';

const store = configureStore({
  reducer: {
    [userLogin.reducerPath]: userLogin.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      userLogin.middleware,
      userProfileApi.middleware
    ),
});

export default store;
