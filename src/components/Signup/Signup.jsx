import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { IoIosEyeOff } from "react-icons/io";
import { RxEyeOpen } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const Signup = () => {

    const [show, setShow] = useState(false);
    const {createUserWithEmailAndPasswordFunc } = useContext(AuthContext);
    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const newUser = { name, email, photoURL, password };

    console.log(newUser);

     const regExp =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;
    
        if (!regExp.test(password)) {
          toast.error(
            "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
          );
          return;
        }

    

    createUserWithEmailAndPasswordFunc(email, password)
  .then((result) => {
    console.log(result)
    toast.success("Registration successful");
    navigate('/')
  })
  .catch((error) => {
          console.log(error)
          // toast.error(error.message)
          if (error.code === "auth/email-already-in-use") {
            toast.error(
              "User already exists in the database"
            );
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

  e.target.reset()
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="name"
                name="name"
                className="input"
                placeholder="Enter your name"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
              />
              {/* photoURL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Enter your photoURL"
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p className="text-center mb-2 text-gray-600">
          Already have an account?{" "}
          <Link className="text-blue-600 font-semibold hover:underline" to="/signin">
            Login
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

