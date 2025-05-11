const { default: mongoose, Schema } = require("mongoose");

const cardSchema = new Schema(
  {
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product"
    },
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    quantity: {
      type: Number,
      default: 1
    },
  },

);

module.exports = mongoose.model("Card", cardSchema);
