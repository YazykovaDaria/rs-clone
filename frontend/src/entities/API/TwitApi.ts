import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../shared/constants/api';
import getToken from '../../shared/lib/getToken';

export const TweetApi = createApi({
  reducerPath: 'TweetApi',
  tagTypes: ['Tweets'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set('x-access-token', token);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getTweets: build.query({
      query: ({
        username,
        limit,
        offset,
      }: {
        username: string;
        limit: number;
        offset: number;
      }) =>
        `tweets?${username && `username=${username}`}&${
          limit && `limit=${limit}`
        }&${offset && `offset=${offset}`}`,
      providesTags: ['Tweets'],
    }),
    addTweet: build.mutation({
      query: (body) => ({
        url: 'tweets',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tweets'],
    }),
    deleteTweet: build.mutation({
      query: (body) => ({
        url: 'tweets',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Tweets'],
    }),
  }),
});

export const {
  useGetTweetsQuery,
  useAddTweetMutation,
  useDeleteTweetMutation,
} = TweetApi;
