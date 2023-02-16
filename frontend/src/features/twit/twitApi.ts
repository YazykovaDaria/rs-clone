import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, token } from '../../shared/constants/api';

export const getTweetApi = createApi({
  reducerPath: 'getTweetApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'x-access-token': token,
    },
  }),
  endpoints: (build) => ({
    getTweets: build.query({
      query: (limit = '', offset = '') =>
        `tweets?${limit && `limit=${limit}`}&${offset && `offset=${offset}`}`,
    }),
  }),
});

export const { useGetTweetsQuery } = getTweetApi;
