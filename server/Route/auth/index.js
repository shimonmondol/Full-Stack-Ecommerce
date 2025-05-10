const express = require("express");
const router = express.Router();
const {
  SignupController,
  LoginController,
  VerifyOtpController,
} = require("../../controllers/authController");

router.post("/signup", SignupController);

router.post("/Login", LoginController);
router.post("/Verifyotp", VerifyOtpController);

module.exports = router;
