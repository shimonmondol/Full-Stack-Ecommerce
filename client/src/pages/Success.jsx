import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router";

const Success = () => {
  const orderId = "ORD123456789";
  const email = "customer@example.com";
  const date = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-50 to-green-100 px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg sm:max-w-xl lg:max-w-2xl p-6 sm:p-10 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500 w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Thank you for your purchase. A confirmation email has been sent to{" "}
          <span className="font-medium break-all">{email}</span>.
        </p>

        <div className="bg-green-600 rounded-lg p-4 text-left text-sm text-white mb-6">
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Date:</strong> {date}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link to={"/"} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-green-400 transition cursor-pointer">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
