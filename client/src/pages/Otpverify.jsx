import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Otpverify = () => {
  const data = useSelector((state) => state.authSlice.value?.payload);
  const [otp, setotp] = useState(null);
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_BASE_URL;

  const handleotpsubmit = () => {
    axios
      .post(`${baseurl}/auth/verifyotp`, {
        email: data.email,
        otp: otp,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        navigate("/signup");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-700">
        <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-md transition-all duration-300">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
            OTP Verification
          </h2>

          <label
            htmlFor="otp"
            className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Enter the 6-digit code sent to your email
          </label>

          <input
            id="otp"
            name="otp"
            type="text"
            onChange={(e) => setotp(e.target.value)}
            maxLength={6}
            placeholder="6 Digit OTP"
            className="w-full mt-4 px-4 py-3 text-center text-lg tracking-widest rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-700"
          />

          <button
            onClick={handleotpsubmit}
            className="w-full mt-6 py-3 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-semibold rounded-xl shadow-lg transition duration-300 cursor-pointer"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default Otpverify;
