const express = require("express");
const {
  orderController,
  getAllorder,
  OrderSuccessController,
  OrderFailedController,
} = require("../../controllers/orderController");
const router = express.Router();

router.post("/placeorder", orderController);
router.get("/getallorder", getAllorder);
router.post("/success/:id", OrderSuccessController);
router.post("/failed", OrderFailedController);

module.exports = router;
