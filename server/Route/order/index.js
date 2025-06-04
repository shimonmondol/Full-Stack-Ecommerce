const express = require("express");
const {
  orderController,
  getallorder,
} = require("../../controllers/orderController");
const router = express.Router();

router.post("/placeorder", orderController);
router.get("/getallorder", getallorder);

module.exports = router;
