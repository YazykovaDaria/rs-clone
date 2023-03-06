import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../../shared/constants/api';
import getToken from '../../../shared/lib/getToken';

export const userProfileApi = createApi({
  reducerPath: 'userProfileApi',
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
    getUserProfile: build.query({
      query: (user: string) => `users/${user}`,
      providesTags: ['User'],
    }),

    updateUser: build.mutation({
      query: (arg) => {
        const { user, body } = arg;
        return {
          url: `users/${user}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),
    updateUserAvatar: build.mutation({
      query: (body) => {
        return {
          url: `users/avatar`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserMutation,
  useUpdateUserAvatarMutation,
} = userProfileApi;
