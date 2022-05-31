import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCourse: null,
  courses: [],
  isLoading: false,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setCurrentCourse: (state, action) => {
      state.currentCourse = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.isLoading = false;
    },
  },
});

export const { increment } = courseSlice.actions;
