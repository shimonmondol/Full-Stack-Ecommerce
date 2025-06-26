import React from "react";
import { XCircle } from "lucide-react";
import { Link } from "react-router";

const Failed = () => {
  const orderId = "ORD987654321";
  const email = "customer@example.com";
  const date = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-red-50 to-red-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-2xl w-full p-10 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="text-red-500 w-20 h-20" />
        </div>
        <h1 className="text-3xl font-bold text-red-600 mb-2">Order Failed</h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your order could not be processed at this time.
        </p>
        <div className="bg-red-400 rounded-lg p-4 text-left text-sm text-white mb-6">
          <p>
            <span className="font-semibold">Order ID:</span> {orderId}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {email}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {date}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link to={"/checkout"} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition cursor-pointer">
            Retry Order
          </Link>
          <Link to="/" className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-red-500 transition cursor-pointer">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Failed;
