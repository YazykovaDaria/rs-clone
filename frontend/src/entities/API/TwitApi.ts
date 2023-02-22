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
    addLike: build.mutation({
      query: (body) => ({
        url: 'likes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tweets'],
    }),
    deleteLike: build.mutation({
      query: (body) => ({
        url: 'likes',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Tweets'],
    }),
    addRetweet: build.mutation({
      query: (body) => ({
        url: 'tweets',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tweets'],
    }),
    addView: build.mutation({
      query: (body) => ({
        url: 'views',
        method: 'POST',
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
  useAddLikeMutation,
  useDeleteLikeMutation,
  useAddRetweetMutation,
  useAddViewMutation,
} = TweetApi;
