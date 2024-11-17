import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../component/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import SingUp from "../component/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "SingUp",
        element: <SingUp />,
      },
    ],
  },
]);

export default router;
