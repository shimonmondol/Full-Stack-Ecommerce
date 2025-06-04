const orderModel = require("../models/orderModel");

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
    } = req.body;

    if (
      fullname &&
      address &&
      phoneNumber &&
      paymentMethod &&
      deliveryCharge &&
      Cardlist &&
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
        });
        await order.save();

        return res
          .status(201)
          .json({ msg: "order placed successfully", success: true });
      } else {
        // Online Payment
        return res.status(200).json({ msg: "online payment" });
      }
    } else {
      return (
        res.status(500),
        json({ msg: "All Fields are Required", success: false })
      );
    }
  } catch (error) {
    return res.status(500).json({ msg: error, success: false });
  }
}

async function getallorder(req, res) {
  try {
    const order = await orderModel.find({}).populate("userid");
    return;
    res
      .status(200)
      .json({ success: true, msg: "order get successfully", data: order });
  } catch (error) {
    return res.status(500).json({ msg: error, success: false });
  }
}

module.exports = { orderController, getallorder };
