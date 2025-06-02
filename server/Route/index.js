const express = require("express");
const router = express.Router();
const auth = require("./auth");
const category = require("./category");
const product = require("./product");
const card = require("./card");
const order = require("./order")

router.use("/auth", auth);
router.use("/category", category);
router.use("/product", product);
router.use("/card", card);
router.use("/order", order);

module.exports = router;
