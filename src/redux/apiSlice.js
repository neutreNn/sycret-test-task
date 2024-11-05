import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sycret.ru/service/api/api' }),
  endpoints: (builder) => ({
    callApi: builder.mutation({
      query: ({ MethodName, params }) => {
        const queryParams = {
          ApiKey: process.env.REACT_APP_API_KEY,
          MethodName,
          ...params,
        };

        const urlParams = new URLSearchParams(queryParams).toString();

        return {
          url: `?${urlParams}`,
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useCallApiMutation } = apiSlice;
