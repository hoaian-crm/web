import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { addressReducer } from "./address";
import { authReducer } from "./auth/state";
import { customerReducer } from "./customers";
import { mailReducer } from "./mail/index";
import { modalReducer } from "./modal/index";
import { permissionReducer } from "./permissions/index";
import { pluginReducer } from "./plugins/index";
import { roleReducer } from "./roles/index";
import { saleReducer } from "./sale";
import { userReducer } from "./users/user";
import { tagReducer } from "./tag";

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
    addressReducer,
    tagReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
