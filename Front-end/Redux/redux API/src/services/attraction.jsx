
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const attractionApi = createApi({
  reducerPath: 'attractionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.melivecode.com/api/' }),
  endpoints: (builder) => ({
    getAllAttractions: builder.query({
      query: () => `attractions`,
    }),
    getAllAttractionByID: builder.query({
      query: (id) => `attractions/${id}`,
    }),
  }),
})

 
export const { useGetAllAttractionsQuery, useGetAllAttractionByIDQuery } = attractionApi



