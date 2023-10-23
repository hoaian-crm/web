import { PrivateRoute } from "components/private_route";
import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import AuthService from "service/auth";
import { Layout } from "./layout";
import { Users } from "./users";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <PrivateRoute>
        <Users />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      try {
        await AuthService.getProfile();
        return redirect("/");
      } catch (error) {
        return false;
      }
    },
  },
]);

export default router;
