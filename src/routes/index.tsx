import { PrivateRoute } from "components/private_route";
import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import AuthService from "service/auth";
import { Users } from "./users";
import Roles from "./roles";
import { Register } from "./register";
import { VerifyOtp } from "./verify_otp";

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
    path: "/roles",
    element: (
      <PrivateRoute>
        <Roles />
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
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify_otp",
    element: <VerifyOtp />,
  },
]);

export default router;
