import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, token } from '../../shared/constants/api';

export const ViewApi = createApi({
  reducerPath: 'ViewApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {
      'x-access-token': token,
    },
  }),
  endpoints: (build) => ({
    addView: build.mutation({
      query: (body) => ({
        url: 'views',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useAddViewMutation } = ViewApi;
