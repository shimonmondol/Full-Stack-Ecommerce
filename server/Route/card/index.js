const express = require("express");
const { addtocardController, getAllcardController, getUserByCardController } = require("../../controllers/cardController");
const router = express.Router();


router.post("/addtocard", addtocardController)
router.get("/usercardlist/:id", getUserByCardController )

module.exports = router;
