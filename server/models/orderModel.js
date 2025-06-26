const { default: mongoose, Schema } = require("mongoose");

const orderSchema = new Schema({
  Cardlist: [
    {
      productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: {
        type: String,
      },
    },
  ],
  totalprice: {
    type: String,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  paymentMethod: {
    type: String,
    enum: ["COD", "Online"],
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Paid"],
  },
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  trn_id: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
