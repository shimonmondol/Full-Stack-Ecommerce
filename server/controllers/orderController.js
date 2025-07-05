const orderModel = require("../models/orderModel");
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.store_id;
const store_passwd = process.env.store_passwd;
const is_live = false; //true for live, false for sandbox
const { v4: uuidv4 } = require("uuid");

async function orderController(req, res) {
  try {
    let {
      fullname,
      address,
      phoneNumber,
      paymentMethod,
      deliveryCharge,
      Cardlist,
      userid,
      totalprice,
    } = req.body;

    if (
      fullname &&
      address &&
      phoneNumber &&
      paymentMethod &&
      deliveryCharge &&
      Cardlist &&
      totalprice &&
      userid
    ) {
      if (paymentMethod == "COD") {
        let order = new orderModel({
          fullname,
          address,
          phoneNumber,
          paymentMethod,
          deliveryCharge,
          Cardlist,
          userid,
          totalprice,
          paymentStatus: "Pending",
        });
        await order.save();

        return res
          .status(201)
          .json({ msg: "order placed successfully", success: true });
      } else {
        const uid = uuidv4();
        const data = {
          total_amount: totalprice,
          currency: "BDT",
          tran_id: uid, // use unique tran_id for each api call
          success_url: `https://full-stack-ecommerce-server.onrender.com/order/success/${uid}`,
          fail_url:
            "https://full-stack-ecommerce-server.onrender.com/order/failed",
          cancel_url: "http://localhost:3030/cancel",
          ipn_url: "http://localhost:3030/ipn",
          shipping_method: "Courier",
          product_name: "Computer.",
          product_category: "Electronic",
          product_profile: "general",
          cus_name: "Customer Name",
          cus_email: "customer@example.com",
          cus_add1: "Dhaka",
          cus_add2: "Dhaka",
          cus_city: "Dhaka",
          cus_state: "Dhaka",
          cus_postcode: "1000",
          cus_country: "Bangladesh",
          cus_phone: "01711111111",
          cus_fax: "01711111111",
          ship_name: "Customer Name",
          ship_add1: "Dhaka",
          ship_add2: "Dhaka",
          ship_city: "Dhaka",
          ship_state: "Dhaka",
          ship_postcode: 1000,
          ship_country: "Bangladesh",
        };
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then(async (apiResponse) => {
          // Redirect the user to payment gateway
          let GatewayPageURL = apiResponse.GatewayPageURL;

          const gateway = GatewayPageURL.split("/");
          const url = gateway[gateway.length - 1];
          let order = new orderModel({
            fullname,
            address,
            phoneNumber,
            paymentMethod: "Online",
            deliveryCharge,
            Cardlist,
            userid,
            totalprice,
            paymentStatus: "Pending",
            trn_id: uid,
          });
          await order.save();
          return res.status(200).json({ success: true, id: url });
        });
      }
    } else {
      return (
        res.status(500),
        json({ msg: "All Fields are Required", success: false, data: req.body })
      );
    }
  } catch (error) {
    return res.status(500).json({ msg: error, success: false });
  }
}

async function getAllorder(req, res) {
  try {
    const order = await orderModel.find({}).populate("userid").populate({
      path: "Cardlist.productid",
      model: "product",
    });

    return res
      .status(200)
      .json({ success: true, msg: "order get successfully", data: order });
  } catch (error) {
    return res.status(500).json({ msg: error, success: false });
  }
}

async function OrderSuccessController(req, res) {
  let { id } = req.params;
  let updateOrder = await orderModel.findOneAndUpdate(
    { trn_id: id },
    { paymentStatus: "paid" }
  );

  await updateOrder.save();

  console.log(updateOrder);
  res.redirect("https://wondrous-biscuit-27b2a1.netlify.app/success");
}

async function OrderFailedController(req, res) {
  res.redirect("https://wondrous-biscuit-27b2a1.netlify.app/failed");
}

module.exports = {
  orderController,
  getAllorder,
  OrderSuccessController,
  OrderFailedController,
};
