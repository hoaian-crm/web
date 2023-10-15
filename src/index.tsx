import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import router from './routes';


const domNode = document.getElementById('root')!;

const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);