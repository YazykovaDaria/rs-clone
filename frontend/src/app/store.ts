import { configureStore } from '@reduxjs/toolkit';
import { userLogin } from '../entities/user/Auth/loginApi';

const store = configureStore({
  reducer: {
    [userLogin.reducerPath]: userLogin.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(userLogin.middleware),
});

export default store;
