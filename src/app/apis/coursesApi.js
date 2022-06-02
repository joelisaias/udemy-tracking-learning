import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { encode } from "js-base64";

//const { UDEMI_API_URL: baseUrl, UDEMI_API_ID, UDEMI_API_SECRET } = import.meta.env;
const token = encode( "8FwUGhSfaxIs095h52v4Z8r2V9qKbABPDOYHYPbT:e1Q5yDxfz6TNuUjvkHqQ5yUmucn6qgGEg3faB8gOoQV7ZeyP09NR4hPqMWkc5qp5Ew1Dd7iH3sxqYon0xrNGR2DwY9cnm2EKy6yGGmKf9v4FXKuOFBMYmWwuLuwl0CRT" );
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
