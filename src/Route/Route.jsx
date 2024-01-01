import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Order from "../pages/Order/Order";
import DashBoard from "../pages/DashBoard/DashBoard";
import Profile from "../pages/Profile/Profile";

const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/order",
                element: <Order></Order>
            },
            {
                path: "/dashboard",
                element: <DashBoard></DashBoard>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
        ],
    },
]);

export default myCreatedRouter;