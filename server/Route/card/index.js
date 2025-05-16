const express = require("express");
const { addtocardController, getAllcardController, getUserByCardController } = require("../../controllers/cardController");
const authCheckMiddleware = require("../../middleware/authCheckMiddleware");
const router = express.Router();


router.post("/addtocard", authCheckMiddleware , addtocardController)
router.get("/usercardlist/:id", getUserByCardController )

module.exports = router;
