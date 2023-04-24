import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import cartProductLoader from "./cartProductsLoader/cartProductLoader";
import Payment from "./components/Payment/Payment";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
      {
        path: "/shop",
        element: <Products></Products>,
      },
      {
        path: "/Orders",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
