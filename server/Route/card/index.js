const express = require("express");
const {
  addtocardController,
  getAllcardController,
  getUserByCardController,
  deleteUserBycardlistController,
  UpdatequantityController,
} = require("../../controllers/cardController");
const authCheckMiddleware = require("../../middleware/authCheckMiddleware");
const router = express.Router();

router.post("/addtocard", authCheckMiddleware, addtocardController);
router.get("/usercardlist/:id", getUserByCardController);
router.delete("/usercarddelete/:id", deleteUserBycardlistController);
router.patch("/updatequantity/:id", UpdatequantityController);

module.exports = router;
