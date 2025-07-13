import React from "react";
import { useNavigate } from "react-router";
import { CheckCircle2 } from "lucide-react";

const COD = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 px-4 text-center">
        <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white leading-12">
          Thank You For Choosing Cash On Delivery. <br /> Your Order Will Be Delivered
          Soon.
        </h1>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default COD;
