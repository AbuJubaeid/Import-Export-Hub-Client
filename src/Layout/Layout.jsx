import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="px-15">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;