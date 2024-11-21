import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Cart from "../Pages/Dashboard/Cart";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AllUsers from "../Layout/Dashboard/AllUsers/AllUsers";
import AddItems from "../Layout/Dashboard/AddItems/AddItems";
import ManageItems from "../Layout/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Layout/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Layout/Dashboard/Payment/Payment";
import PaymentHistory from "../Layout/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Layout/Dashboard/UserHome/UserHome";
import AdminHome from "../Layout/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // General routes //
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "manageItems",
        element: <ManageItems />,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem />,
        loader: ({ params }) => fetch(`https://bistro-boss-server-rust-six.vercel.app/menu/${params.id}`),
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      //admin routes//
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "addItems",
        element: <AddItems />,
      },

      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);
