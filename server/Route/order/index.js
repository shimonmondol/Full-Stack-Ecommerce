const express = require("express");
const {
  orderController,
  getAllorder,
} = require("../../controllers/orderController");
const router = express.Router();

router.post("/placeorder", orderController);
router.get("/getallorder", getAllorder);

module.exports = router;
