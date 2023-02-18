import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, token } from '../../shared/constants/api';

export const TweetApi = createApi({
  reducerPath: 'TweetApi',
  tagTypes: ['Tweets'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'x-access-token': token,
    },
  }),
  endpoints: (build) => ({
    getTweets: build.query({
      query: (username = '', limit = '', offset = '') =>
        `tweets?${username && `username=${username}`}${
          limit && `limit=${limit}`
        }&${offset && `offset=${offset}`}`,
      providesTags:['Tweets'],
    }),
    addTweet: build.mutation({
      query: (body) => ({
        url: 'tweets',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tweets'],
    }),
  }),
});

export const { useGetTweetsQuery, useAddTweetMutation } = TweetApi;
