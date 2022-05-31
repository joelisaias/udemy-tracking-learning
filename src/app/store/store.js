import { configureStore } from "@reduxjs/toolkit";
import { coursesApi } from "../apis/coursesApi";
import { courseSlice, authSlice } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});
