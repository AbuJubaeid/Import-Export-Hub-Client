import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import AllProducts from "../components/AllProducts/AllProducts";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: '/allProducts',
            Component: AllProducts
        }
    ]
  },
]);

export default router