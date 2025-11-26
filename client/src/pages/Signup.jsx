import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../slices/userslice";


const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const baseurl = import.meta.env.VITE_BASE_URL;

  const handlesignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseurl}/auth/signup`, {
        name: fullname,
        email,
        password,
      });

      // Save user data in localStorage
      localStorage.setItem("userdata", JSON.stringify(res.data.data));

      // Update Redux state
      dispatch(userLoginInfo(res.data.data));

      toast.success("SignUp Successful", {
        position: "top-center",
        autoClose: 4000,
      });

      // Navigate after 4 seconds (same as toast autoClose)
      setTimeout(() => navigate("/login"), 4000);
    } catch (error) {
      if (error.response && error.response.data?.message) {
        toast.error(error.response.data.message, {
          position: "top-center",
        });
      } else {
        toast.error("Signup failed. Please try again.", {
          position: "top-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-black">
        <ToastContainer />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form
                onSubmit={handlesignup}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={(e) => setFullname(e.target.value)}
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Shimon Mondol"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 rounded-lg focus:outline-none w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-black cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:opacity-50"
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
