import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer } from "./auth/state";
import { mailReducer } from "./mail/index";
import { modalReducer } from "./modal/index";
import { permissionReducer } from "./permissions/index";
import { pluginReducer } from "./plugins/index";
import { roleReducer } from "./roles/index";
import { saleReducer } from "./sale";
import { userReducer } from "./users/user";
import { customerReducer } from "./customers";

export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    permissionReducer,
    roleReducer,
    modalReducer,
    pluginReducer,
    mailReducer,
    saleReducer,
    customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
