import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Otpverify = () => {
  const data = useSelector((state) => state.authSlice.value?.payload);

  const [otp, setotp] = useState(null);

  const navigate = useNavigate();

  const handleotpsubmit = () => {
    axios
      .post("https://full-stack-ecommerce-server.onrender.com/auth/verifyotp", {
        email: data.email,
        otp: otp,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div onChange={(e) => setotp(e.target.value)}>
          <label
            htmlFor="email"
            className="block text-center mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            OTP Verification Code
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            type="fullname"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white center-placeholder dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6"
            placeholder="OTP"
            required=""
          />
          <button
            onClick={handleotpsubmit}
            className="text-center cursor-pointer mt-3"
          >
            Submit
          </button>
        </div>
        {/* <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP> */}
      </div>
    </>
  );
};

export default Otpverify;
