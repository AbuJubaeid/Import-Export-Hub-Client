import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import AddProducts from "../components/AddProducts/AddProducts";
import AllProducts from "../components/AllProducts/AllProducts";
import Home from "../components/Home/Home";
import MyExports from "../components/MyExports/MyExports";
import MyImports from "../components/MyImports/MyImports";


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
        },
        {
            path: '/myExports',
            Component: MyExports
        },
        {
            path: '/myImports',
            Component: MyImports
        },
        {
            path: '/addProducts',
            Component: AddProducts
        },
    ]
  },
]);

export default router