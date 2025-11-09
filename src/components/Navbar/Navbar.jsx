import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { PuffLoader } from "react-spinners";
import { AuthContext } from "../../AuthContext/AuthContext";

const Navbar = () => {

  const {user, setUser, signOutFunc, loading} = useContext(AuthContext)

  const handleSignout = () => {
      signOutFunc()
        .then(() => {
          toast.success("Signout successfull");
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
            isActive ? "active-link" : "inactive-link"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          to="/allProducts"
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          to="/myExports"
        >
          My Exports
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          to="/myImports"
        >
          My Imports
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          to="/addProducts"
        >
          Add Products
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-15">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-1">
            <img className="w-[30px] h-[30px]" src="/logo.ico" alt="" />
            <Link to="/" className="text-2xl font-extrabold">IEHub</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div  className="navbar-end">
              {loading ? <PuffLoader /> :user ? (
                <div className="text-center space-y-3 ">
                  <button
                    className=""
                    popoverTarget="popover-1"
                    style={{ anchorName: "--anchor-1" }}
                  >
                    <img
                      src={user?.photoURL || "https://via.placeholder.com/88"}
                      className="h-[40px] w-[40px] rounded-full mx-auto"
                      alt=""
                    />
                  </button>
      
                  <div
                    className="dropdown menu w-25 rounded-box bg-base-100 shadow-sm"
                    popover="auto"
                    id="popover-1"
                    style={
                      { positionAnchor: "--anchor-1" }}
                  >
                    <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                    <button onClick={handleSignout} className="my-btn text-blue-600 cursor-pointer">
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="/signin" className="text-xl text-blue-600">
                    Login
                  </Link>
                </div>
              )}
            </div>
    </div>
  );
};

export default Navbar;
