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
    const { userid, cardid } = req.body;

    if (userid) {
      await cardmodel.findOneAndDelete({ _id: cardid });
      return res
        .status(200)
        .json({ msg: "card deleted succesful", success: true });
    }
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

async function UpdatequantityController(req, res) {
  try {
    const { id } = req.params;
    const { cardid } = req.body;

    await cardmodel.findOneAndUpdate(
      { _id: id },
      { $inc: { quantity: 1 } },
      { new: true }
    );

    return res
      .status(200)
      .json({ msg: "card quantity update succesful", success: true });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error });
  }
}

module.exports = {
  addtocardController,
  getUserByCardController,
  deleteUserBycardlistController,
  UpdatequantityController,
};
