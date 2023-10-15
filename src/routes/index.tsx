import { PrivateRoute } from 'components/private_route';
import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import Login from "./login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router;