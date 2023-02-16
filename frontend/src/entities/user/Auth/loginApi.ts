import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../shared/constants/api';

export const userLogin = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getLogin: build.mutation({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body,
      }),
    }),
    getSignup: build.mutation({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body,
      }),
    }),
  }),
});

export const { useGetLoginMutation, useGetSignupMutation } = userLogin;
