const cardmodel = require("../models/cardmodel");

async function addtocardController(req, res) {
  let { productid, quantity, userid } = req.body;
  try {
    let card = new cardmodel({
      productid,
      quantity,
      userid,
    });

    await card.save();
    res.status(201).json({ success: true, msg: "product add to card" });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

async function getUserByCardController(req, res) {
  try {
    let { id } = req.params;

    let findcard = await cardmodel.find({ userid: id }).populate("productid");

    res.status(200).json({ success: true, data: findcard });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

async function deleteUserBycardlistController(req, res) {
  try {
    const { id } = req.params;
    
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

module.exports = {
  addtocardController,
  getUserByCardController,
  deleteUserBycardlistController,
};
