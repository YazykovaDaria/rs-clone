import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../shared/constants/api';
import getToken from '../../shared/lib/getToken';

export const followApi = createApi({
  reducerPath: 'FollowApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      headers.set('x-access-token', token);
      return headers;
    },
  }),
  endpoints: (build) => ({
    unfollow: build.mutation({
      query: (body) => ({
        url: 'followers/',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['User'],
    }),

    follow: build.mutation({
      query: (body) => ({
        url: 'followers/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useFollowMutation, useUnfollowMutation } = followApi;
