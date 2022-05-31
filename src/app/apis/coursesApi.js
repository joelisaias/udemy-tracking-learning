import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { encode } from "js-base64";

//const { UDEMI_API_URL: baseUrl, UDEMI_API_ID, UDEMI_API_SECRET } = import.meta.env;
const token = encode( "58CWdGvq6It83jvF4gVKcNIVOBxrfgniq2fTxiBq:FQZ3RofxpDx2KXgwCyX6uz2LExowcEy33P2tqc5SlHqyLmTGluJ6i8CjIT6FRi50j8HNMmrlq6RtUKvJgfknO83t0K2CJsL4gQ8KOTFr8GZdNF0CPAaKP7yyWDZxAB3k" );
//console.log('baseUrl',baseUrl);
console.log(import.meta.env)
//console.log('client id',import.meta.env.UDEMI_API_ID);
//console.log('client secret',import.meta.env.UDEMI_API_SECRET);
//console.log(token)
export const coursesApi = createApi({
  reducerPath: "coursesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:'https://www.udemy.com/api-2.0/',
  }),
  endpoints: (builder) => ({
    getCoursesByFilter: builder.query({
      query: ({page, size, filter}) => {
        return {
          url: `/courses?page=${page}&size=${size}&filter=${filter}`,
          method: "GET",
          headers: {
            Authorization: `Basic ${token}`,            
          },
        };
      },
    }),
    getCourseById: builder.query({
      query: (id) => `courses/${id}`,
    }),
    getCurriculumById: builder.query({
      query: (id) => `courses/${id}/public-curriculum-items/`,
    }),
  }),
});

export const {
  useGetCourseByIdQuery,
  useGetCoursesByFilterQuery,
  useGetCurriculumByIdQuery,
} = coursesApi;
