import React from "react";

const Checkout = () => {
  return (
    <div>
      <div class="bg-white p-4 pt-30 pb-20">
        <div class="md:max-w-5xl max-w-xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 max-md:order-1">
              <h2 class="text-3xl font-semibold text-slate-900">
                Make a payment
              </h2>
              <p class="text-slate-500 text-sm mt-4">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>
              <div class="mt-8 max-w-lg">
                <h3 class="text-lg font-semibold text-slate-900">
                  Choose your payment method
                </h3>
                <div class="flex flex-wrap gap-4 justify-between mt-6">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="w-5 h-5 cursor-pointer"
                      id="card"
                      checked
                    />
                    <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        class="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        class="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        class="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="w-5 h-5 cursor-pointer"
                      id="paypal"
                    />
                    <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        class="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>

                <form class="mt-12">
                  <div class="grid gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        class="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div class="grid gap-4 mt-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Address"
                        class="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div class="grid gap-4 mt-4">
                    <div>
                      <input
                        type="number"
                        placeholder="Phone Number"
                        class="px-4 py-3.5 bg-gray-100 text-slate-900 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    class="mt-8 w-40 py-3 text-[15px] font-medium bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
                  >
                    Pay
                  </button>
                </form>
              </div>
            </div>

            <div class="bg-gray-100 p-6 rounded-md">
              <h2 class="text-2xl font-semibold text-slate-900">$250.00</h2>
              <ul class="text-slate-500 font-medium mt-8 space-y-4">
                <li class="flex flex-wrap gap-4 text-sm">
                  Split Sneakers{" "}
                  <span class="ml-auto font-semibold text-slate-900">
                    $150.00
                  </span>
                </li>
                <li class="flex flex-wrap gap-4 text-sm">
                  Echo Elegance{" "}
                  <span class="ml-auto font-semibold text-slate-900">
                    $90.00
                  </span>
                </li>
                <li class="flex flex-wrap gap-4 text-sm">
                  Tax{" "}
                  <span class="ml-auto font-semibold text-slate-900">
                    $10.00
                  </span>
                </li>
                <li class="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900 border-t-2 pt-4">
                  Total <span class="ml-auto">$250.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
