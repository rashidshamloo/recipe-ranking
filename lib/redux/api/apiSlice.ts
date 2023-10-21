// redux toolkit
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

// zod
import { ApiResponseSchema } from '@/schemas/schemas';

// types
import { Recipe, ApiResponse } from '@/types/types';

// application id
const APPLICATION_ID = process.env.EXPO_PUBLIC_APPLICATION_ID;

export const apiSlice = createApi({
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: 'https://app.rakuten.co.jp/services/api/Recipe/',
    })
  ),
  endpoints: (builder) => ({
    getRecipe: builder.query<Recipe[], number>({
      query: (id) =>
        `CategoryRanking/20170426?format=json&applicationId=${APPLICATION_ID}${
          id ? `&categoryId=${id}` : ''
        }`,
      transformResponse: (response) => {
        ApiResponseSchema.safeParse(response);
        return (response as ApiResponse).result;
      },
    }),
  }),
});

export const { useGetRecipeQuery } = apiSlice;
