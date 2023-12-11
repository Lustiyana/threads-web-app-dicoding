import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/reducer";
import RegisterReducer from "./features/register/reducer";
import LoginReducer from "./features/login/reducer";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    register: RegisterReducer,
    login: LoginReducer
  }
})