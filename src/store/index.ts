import { permissionReducer } from './permissions/index';
import { userReducer } from "./users/user";
import { authReducer } from "./auth/state";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    permissionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export enum BaseStatus {
  Loading,
  Success,
  Failed,
  NoAction,
}
