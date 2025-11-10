import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoIosEyeOff } from "react-icons/io";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);
  const { signInWithEmailAndPasswordFunc, signInWithPopupFunc } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = { email, password };
    console.log(user);

    signInWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message)
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists in the database");
        } else if (e.code === "auth/weak-password") {
          toast.error("use atleast 6 digit password");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
      });

    e.target.reset();
  };

  const handleGoogleBtn =()=>{
    signInWithPopupFunc()
    .then(result=>{
        console.log(result)
        navigate("/");
        toast.success("Login successful");
    })
    .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />
              {/* password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 z-50"
                >
                  {show ? <RxEyeOpen /> : <IoIosEyeOff />}
                </span>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          {/* Google */}
          <button onClick={handleGoogleBtn} className="btn mx-6 mb-4 bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p className="text-center mb-4 text-gray-600">
            Don't have an account?{" "}
            <Link
              className="text-blue-600 font-semibold hover:underline"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
