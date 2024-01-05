import { PrivateRoute } from "components/private_route";
import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import AuthService from "service/auth";
import Customer from "./customer";
import { DetailCustomer } from "./customer/detail";
import Dashboard from "./dashboard";
import Login from "./login";
import Mail from "./mail";
import Plugin from "./plugin";
import { Register } from "./register";
import Role from "./role";
import Users from "./users";
import { VerifyOtp } from "./verify_otp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Dashboard />
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
        <Role />
      </PrivateRoute>
    ),
  },
  {
    path: "/customers",
    element: (
      <PrivateRoute>
        <Customer />
      </PrivateRoute>
    ),
  },
  {
    path: "customers/:customerId",
    element: <DetailCustomer />,
  },
  {
    path: "/plugins",
    children: [
      {
        path: "settings",
        element: (
          <PrivateRoute>
            <Plugin />
          </PrivateRoute>
        ),
      },
      {
        path: "mails",
        element: (
          <PrivateRoute>
            <Mail />
          </PrivateRoute>
        ),
      },
    ],
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
