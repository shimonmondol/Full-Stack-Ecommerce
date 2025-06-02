async function orderController(req, res) {
  let {
    fullname,
    address,
    phoneNumber,
    paymentMethod,
    deliveryCharge,
    cardList,
    userid,
  } = req.body;
  res.send(req.body);
}

module.exports = { orderController };
