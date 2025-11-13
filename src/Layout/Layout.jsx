// import { Outlet } from "react-router";
// import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";

// const Layout = () => {
//     return (
//         <div>
//             <div>
//                 <Navbar></Navbar>
//             </div>
//             <div className="min-h-[300px]">
//                 <Outlet></Outlet>
//             </div>
//             <div>
//                 <Footer></Footer>
//             </div>
//         </div>
//     );
// };

// export default Layout;

import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 shadow-md bg-white">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-6 lg:px-16 py-6 md:py-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-inner mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
