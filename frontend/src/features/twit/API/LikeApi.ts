import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, token } from '../../../shared/constants/api';

export const LikeApi = createApi({
  reducerPath: 'LikeApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'x-access-token': token,
    },
  }),
  endpoints: (build) => ({
    addLike: build.mutation({
      query: (body) => ({
        url: 'likes',
        method: 'POST',
        body,
      }),
    }),
    deleteLike: build.mutation({
      query: (body) => ({
        url: 'likes',
        method: 'DELETE',
        body,
      }),
    }),
  }),
});

export const { useAddLikeMutation, useDeleteLikeMutation } = LikeApi;
