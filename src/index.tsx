import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import router from "./routes";
import { store } from "store";
import { Provider } from "react-redux";

const domNode = document.getElementById("root")!;

const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
