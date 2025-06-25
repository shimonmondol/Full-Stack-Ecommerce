const express = require("express");
const {
  orderController,
  getAllorder,
  OrderSuccessController,
} = require("../../controllers/orderController");
const router = express.Router();

router.post("/placeorder", orderController);
router.get("/getallorder", getAllorder);
router.post("/success", OrderSuccessController);

module.exports = router;
