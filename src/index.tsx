import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import router from "./routes";
import { store } from "store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

const domNode = document.getElementById("root")!;

// English.
TimeAgo.addDefaultLocale(en)
// Create formatter (English).
export const timeAgo = new TimeAgo('en-US')

const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
