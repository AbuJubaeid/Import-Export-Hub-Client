import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { IoIosEyeOff } from "react-icons/io";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setLoading,
    signOutFunc,
    setUser,
    signInWithPopupFunc,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        console.log(result)
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            signOutFunc()
              .then(() => {
                setLoading(false);
                toast.success("Registration successful");
                navigate("/");
                setUser(null);
              })
              .catch((error) => toast.error(error.message));
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => {
        toast.error(error.message || "Registration failed");
      });

    e.target.reset();
  };

  const handleGoogleBtn = () => {
    signInWithPopupFunc()
      .then(() => {
        navigate("/");
        setLoading(false);
        toast.success("Login successful");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Create Your Account
          </h1>
          <p className="text-gray-600 sm:text-lg">
            Join us today! Sign up to manage your products and imports seamlessly.
          </p>
        </div>

        {/* Right: Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
            </div>

            {/* Photo URL */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 font-medium mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-2/3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {show ? <RxEyeOpen size={20} /> : <IoIosEyeOff size={20} />}
              </span>
            </div>

            {/* Register Button */}
            <button className="bg-purple-600 text-white py-2 rounded-xl font-semibold hover:bg-purple-700 transition duration-200">
              Register
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
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-purple-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
