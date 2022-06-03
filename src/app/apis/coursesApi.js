import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_API_URL: baseUrl} = import.meta.env;

export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCoursesByFilter: builder.query({
      query: ({page, size, filter}) => {
        return {
          url: `/courses?page=${page}&size=${size}&filter=${filter}`,
          method: "GET",
        };
      },
    }),
    getCourseById: builder.query({
      query: (id) => `courses/${id}`,
    }),
    getCurriculumById: builder.query({
      query: (id) => {return {
        url:`courses/${id}/public-curriculum-items/`,
      }}
    }),
  }),
});

export const {
  useGetCourseByIdQuery,
  useGetCoursesByFilterQuery,
  useGetCurriculumByIdQuery,
} = coursesApi;
