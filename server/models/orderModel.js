const { default: mongoose, Schema } = require("mongoose");

const orderSchema = new Schema({
  cardList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  paymentmethod: {
    type: String,
    enum: ["COD", "Online"],
  },
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
