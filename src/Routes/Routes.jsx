import { createBrowserRouter } from "react-router";
import AddProducts from "../components/AddProducts/AddProducts";
import AllProducts from "../components/AllProducts/AllProducts";
import Home from "../components/Home/Home";
import MyExports from "../components/MyExports/MyExports";
import MyImports from "../components/MyImports/MyImports";
import ProductDEtails from "../components/ProductDetails/ProductDEtails";
import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Layout from "../Layout/Layout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
        {
            index: true,
            Component: Home,
            loader: ()=> fetch('http://localhost:3000/recent-products')
        },
        {
            path: '/allProducts',
            Component: AllProducts,
            loader: ()=> fetch("http://localhost:3000/products")
        },
        {
            path: '/product/:id',
            Component: ProductDEtails ,
            loader: ({params})=> fetch(`http://localhost:3000/products/${params.id}`)
        },
        {
            path: '/myExports',
            element: <PrivateRoute><MyExports></MyExports></PrivateRoute>
        },
        {
            path: '/myImports',
            element: <PrivateRoute><MyImports></MyImports></PrivateRoute>
        },
        {
            path: '/addProducts',
            element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },
        {
            path: '/signup',
            Component: Signup
        },
        {
            path: '/signin',
            Component: Signin
        },
    ]
  },
]);

export default router