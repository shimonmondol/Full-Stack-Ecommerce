import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Checkout = () => {
  const data = useSelector((state) => state.authSlice.value?.data);
  const [Cardlist, setCardList] = useState([]);
  const [divisionlist, SetDivisionlist] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [paymentMethod, setpaymentMethod] = useState("");
  const [deliveryCharge, setDeliveryCharge] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const baseurl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }

    function getCardList() {
      axios
        .get(`${baseurl}/card/usercardlist/${data?._id}`)
        .then((res) => {
          setCardList(res.data.data);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
    getCardList();
  }, [Cardlist]);

  useEffect(() => {
    function getDivision() {
      axios.get("https://bdapi.vercel.app/api/v.1/division").then((res) => {
        SetDivisionlist(res.data.data);
      });
    }
    getDivision();
  }, []);

  const discountprice = Cardlist.reduce(function (total, item) {
    return total + Math.round(item.productid.discountprice * item.quantity);
  }, 0);

  const handledivision = (value) => {
    setSelectedDivision(value);
    if (value == 6) {
      setDeliveryCharge(60);
    } else {
      setDeliveryCharge(120);
    }
  };

  const handlePayment = (value) => {
    setpaymentMethod(value);
  };

  let handlePlaceorder = () => {
    const productinfo = Cardlist.map((item) => ({
      productid: item.productid._id,
    }));
    axios
      .post("http://localhost:3000/order/placeorder", {
        fullname,
        address,
        phoneNumber,
        paymentMethod,
        deliveryCharge,
        Cardlist: productinfo,
        userid: data._id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="bg-white dark:bg-gray-900 p-4 pt-30 pb-20">
        <div class="md:max-w-5xl max-w-xl mx-auto">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 max-md:order-1">
              <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
                Make a payment
              </h2>
              <p class="text-gray-900 dark:text-white text-sm mt-4">
                Complete your transaction swiftly and securely with our
                easy-to-use payment process.
              </p>
              <div class="mt-8 max-w-lg">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
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
                        onChange={(e) => setFullname(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                        class="px-4 py-3.5 text-white w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div class="grid gap-4 mt-4">
                    <div>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Address"
                        class="px-4 py-3.5 text-white w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div class="grid gap-4 mt-4">
                    <div>
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="number"
                        placeholder="Phone Number"
                        class="px-4 py-3.5 text-white w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 mt-4">
                    <Select
                      onValueChange={handledivision}
                      value={selectedDivision}
                    >
                      <SelectTrigger className="w-[180px] cursor-pointer">
                        <SelectValue placeholder="Select Division" />
                      </SelectTrigger>

                      <SelectContent className="SelectContent">
                        {divisionlist.map((item) => (
                          <SelectItem key={item.name} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select onValueChange={handlePayment} value={paymentMethod}>
                      <SelectTrigger className="w-[180px] cursor-pointer">
                        <SelectValue placeholder="Select Payment Method" />
                      </SelectTrigger>

                      <SelectContent className="SelectContent">
                        <SelectItem value="COD">Cash On Delivery</SelectItem>
                        <SelectItem value="Online">Online Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {deliveryCharge && (
                    <button
                      onClick={handlePlaceorder}
                      type="button"
                      class="mt-8 w-40 py-3 text-[15px] font-medium cursor-pointer bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
                    >
                      Pay
                    </button>
                  )}
                </form>
              </div>
            </div>

            <div class="bg-gray-100 p-6 rounded-md">
              <h2 class="text-2xl font-semibold text-slate-900">
                Product List
              </h2>
              <ul class="text-black font-medium mt-8 space-y-4">
                {Cardlist.map((item) => (
                  <li class="flex flex-wrap gap-4 text-sm">
                    {item.productid.title.slice(0, 10)}
                    {"  "}
                    <div>
                      ({item.quantity} X {item.productid.discountprice}){" "}
                    </div>
                    <span class="ml-auto font-semibold text-slate-900">
                      {item.productid.discountprice * item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="text-black font-medium mt-8 space-y-4">
                {deliveryCharge && (
                  <li className="flex justify-between">
                    Delivey Charge <span>{deliveryCharge}</span>{" "}
                  </li>
                )}
              </ul>
              <h2 className="text-black font-semibold mt-8 border-t flex justify-between border-gray-400 pt-5">
                Total Price : <span>{discountprice + deliveryCharge}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
