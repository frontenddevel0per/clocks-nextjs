import { configureStore } from "@reduxjs/toolkit";
import date from "./date/date.slice";
import colors from "./colors/colors.slice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ date, colors });

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
