import { ConfigProvider } from "antd";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { store } from "store";
import { theme } from "theme/theme";
import "./index.scss";
import router from "./routes";

const domNode = document.getElementById("root")!;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

// English.
TimeAgo.addDefaultLocale(en);
// Create formatter (English).
export const timeAgo = new TimeAgo("en-US");

const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
