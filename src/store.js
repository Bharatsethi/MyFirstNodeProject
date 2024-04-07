// store.js
import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from "./state/slices/aboutSlice"

export const store = configureStore({
  reducer: {
    about: aboutReducer,
  },
});