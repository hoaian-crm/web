import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en';
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { store } from "store";
import "./index.scss";
import router from "./routes";


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
