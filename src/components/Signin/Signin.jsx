import { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff } from "react-icons/io";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);
  const { signInWithEmailAndPasswordFunc, signInWithPopupFunc, sendPasswordResetEmailFunc, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        console.log(result)
        navigate("/");
        setLoading(false);
        toast.success("Login successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message || "An unexpected error occurred");
      });

    e.target.reset();
  };

  const handleGoogleBtn = () => {
    signInWithPopupFunc()
      .then((result) => {
        console.log(result)
        navigate("/");
        setLoading(false);
        toast.success("Login successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForgetButton = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }
    sendPasswordResetEmailFunc(email)
      .then(() => {
        setLoading(false);
        toast("Check your email to reset password");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Heading & Info */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Welcome Back!
          </h1>
          <p className="text-gray-600 sm:text-lg">
            Login to your account and manage your imports & exports seamlessly.
          </p>
        </div>

        {/* Right: Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 font-medium mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-2/3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {show ? <RxEyeOpen size={20} /> : <IoIosEyeOff size={20} />}
              </span>
            </div>

            {/* Forgot password */}
            <button
              type="button"
              onClick={handleForgetButton}
              className="text-right text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </button>

            {/* Login button */}
            <button className="bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-200">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-2 text-gray-400">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleBtn}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-xl py-2 font-medium hover:bg-gray-100 transition"
          >
            <FcGoogle />
            Login with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;

