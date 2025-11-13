// import { useContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { Link, NavLink } from "react-router";
// import { PuffLoader } from "react-spinners";
// import { AuthContext } from "../../AuthContext/AuthContext";

// const Navbar = () => {

//   const {user, setUser, signOutFunc, loading} = useContext(AuthContext)
//     const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

//   useEffect(() => {
//     const html = document.querySelector('html')
//      html.setAttribute("data-theme", theme)
//      localStorage.setItem("theme", theme)
//   }, [theme])


//   const handleTheme = (checked) => {
//     setTheme(checked ? "dark": "light")
//   }

//   const handleSignout = () => {
//       signOutFunc()
//         .then(() => {
//           toast.success("Signout successfull");
//           setUser(null);
//         })
//         .catch((error) => {
//           toast.error(error.message);
//         });
//     };

//   const links = (
//     <>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "active-link" : "inactive-link"
//           }
//           to="/"
//         >
//           Home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "active-link" : "inactive-link"
//           }
//           to="/allProducts"
//         >
//           All Products
//         </NavLink>
//       </li>
//       {
//         user && 
//         <>
//         <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "active-link" : "inactive-link"
//           }
//           to="/myExports"
//         >
//           My Exports
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "active-link" : "inactive-link"
//           }
//           to="/myImports"
//         >
//           My Imports
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) =>
//             isActive ? "active-link" : "inactive-link"
//           }
//           to="/addProducts"
//         >
//           Add Products
//         </NavLink>
//       </li>
//         </>
//       }
//     </>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm px-15">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {" "}
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />{" "}
//             </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//           >
//             {links}
//           </ul>
//         </div>
//         <div className="flex items-center gap-1">
//             <img className="w-[30px] h-[30px]" src="/logo.ico" alt="" />
//             <Link to="/" className="text-2xl font-extrabold">IEHub</Link>
//         </div>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>
//       <div  className="navbar-end">
//               {loading ? <PuffLoader /> :user ? (
//                 <div className="text-center space-y-3 ">
//                   <button
//                     className=""
//                     popoverTarget="popover-1"
//                     style={{ anchorName: "--anchor-1" }}
//                   >
//                     <img
//                       src={user?.photoURL || "https://via.placeholder.com/88"}
//                       className="h-[40px] w-[40px] rounded-full mx-auto"
//                       alt=""
//                     />
//                   </button>
      
//                   <div
//                     className="dropdown menu w-25 rounded-box bg-base-100 shadow-sm"
//                     popover="auto"
//                     id="popover-1"
//                     style={
//                       { positionAnchor: "--anchor-1" }}
//                   >
//                     <h2 className="text-xl font-semibold">{user?.displayName}</h2>
//                     <p>------------</p>
//                     {/* theme */}
//                     <input
//                     onChange={(e)=> handleTheme(e.target.checked)}
//                     type="checkbox"
//                     defaultChecked={localStorage.getItem('theme') === "dark"}
//                     className="toggle"/>
//                     {/*  */}
//                     <button onClick={handleSignout} className="my-btn text-blue-600 cursor-pointer">
//                       Sign Out
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <Link to="/signin" className="text-xl text-blue-600">
//                     Login
//                   </Link>
//                 </div>
//               )}
//             </div>
//     </div>
//   );
// };

// export default Navbar;
// ----------------------

import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { PuffLoader } from "react-spinners";
import { AuthContext } from "../../AuthContext/AuthContext";

const Navbar = () => {
  const { user, setUser, signOutFunc, loading } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignout = () => {
    signOutFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-all duration-200"
              : "text-gray-600 hover:text-blue-500 transition-all duration-200"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-all duration-200"
              : "text-gray-600 hover:text-blue-500 transition-all duration-200"
          }
          to="/allProducts"
        >
          All Products
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-all duration-200"
                  : "text-gray-600 hover:text-blue-500 transition-all duration-200"
              }
              to="/myExports"
            >
              My Exports
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-all duration-200"
                  : "text-gray-600 hover:text-blue-500 transition-all duration-200"
              }
              to="/myImports"
            >
              My Imports
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 transition-all duration-200"
                  : "text-gray-600 hover:text-blue-500 transition-all duration-200"
              }
              to="/addProducts"
            >
              Add Products
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 sm:px-6 md:px-10 transition-all duration-300">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-xl mt-3 w-52 p-2 shadow-lg border border-gray-100"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-8" src="/logo.ico" alt="" />
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition-all"
          >
            IEHub
          </Link>
        </div>
      </div>

      {/* Center Links (closer spacing) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 text-base font-medium">
          {links}
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {loading ? (
          <PuffLoader color="#2563eb" size={30} />
        ) : user ? (
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <label className="flex items-center cursor-pointer">
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle toggle-sm"
              />
            </label>

            {/* Profile */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="avatar cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="w-10 rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/88"}
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-xl mt-3 p-3 shadow-lg border border-gray-100 w-52 text-center"
              >
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                <div className="divider my-1"></div>
                <button
                  onClick={handleSignout}
                  className="btn btn-outline btn-error btn-sm hover:scale-105 transition-transform"
                >
                  Sign Out
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            to="/signin"
            className="btn btn-outline btn-primary btn-sm sm:btn-md font-semibold hover:scale-105 transition-transform duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
