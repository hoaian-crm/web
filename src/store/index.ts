import { pluginReducer } from './plugins/index';
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer } from "./auth/state";
import { modalReducer } from "./modal/index";
import { permissionReducer } from "./permissions/index";
import { roleReducer } from "./roles/index";
import { userReducer } from "./users/user";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    permissionReducer,
    roleReducer,
    modalReducer,
    pluginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;