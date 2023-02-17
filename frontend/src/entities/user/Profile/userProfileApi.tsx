import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, token } from '../../../shared/constants/api';

export const userProfileApi = createApi({
  reducerPath: 'userProfileApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'x-access-token': token,
    },
  }),
  endpoints: (build) => ({
    getUserProfile: build.query({
      query: (user: string) => `users/${user}`,
    }),
  }),
});

export const { useGetUserProfileQuery } = userProfileApi;
