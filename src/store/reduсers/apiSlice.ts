import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FetchData, CardData } from 'types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
    getApi: builder.query<FetchData, string>({
      query: (query) => `/?page=1&name=${query}`,
    }),
    getApiId: builder.query<CardData, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetApiQuery, useGetApiIdQuery } = apiSlice;
