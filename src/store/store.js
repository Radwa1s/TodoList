import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Action || Reducer";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
