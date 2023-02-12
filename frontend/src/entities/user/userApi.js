import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userLogin = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rs-clone-twitter-api-production.up.railway.app/api/',
  }),
  endpoints: (build) => ({
    // getLo: build.query({
    //   query: () => 'auth/signin',
    // }),
    getLogin: build.mutation({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body,
      }),
    }),
  }),
});

export const { useGetLoginMutation } = userLogin;
