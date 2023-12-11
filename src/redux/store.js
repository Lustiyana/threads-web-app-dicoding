import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/reducer";

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})