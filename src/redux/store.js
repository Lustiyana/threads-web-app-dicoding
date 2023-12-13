import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/reducer";
import RegisterReducer from "./features/register/reducer";
import LoginReducer from "./features/login/reducer";
import ToastReducer from "./features/toast/reducer";
import ThreadsReducer from "./features/threads/reducer";
import LeaderboardsReducer from "./features/leaderboards/reducer";
import NewThreadReducer from "./features/newThread/reducer";
import DetailReducer from "./features/detail/reducer";
import CommentReducer from "./features/comment/reducer";
import UsersReducer from "./features/users/reducer";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    register: RegisterReducer,
    login: LoginReducer,
    toast: ToastReducer,
    threads: ThreadsReducer,
    leaderboards: LeaderboardsReducer,
    newThread: NewThreadReducer,
    detailThread: DetailReducer,
    comment: CommentReducer,
    users: UsersReducer
  }
})