import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, token } from '../../shared/constants/api';

export const addTweetApi = createApi({
  reducerPath: 'addTweetApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'x-access-token': token,
    },
  }),
  endpoints: (build) => ({
    addTweet: build.mutation({
      query: (body) => ({
        url: 'tweets',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAddTweetMutation } = addTweetApi;
