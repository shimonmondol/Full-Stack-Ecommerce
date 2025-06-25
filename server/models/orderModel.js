const { default: mongoose, Schema } = require("mongoose");

const orderSchema = new Schema({
  Cardlist: [
    {
      productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    },
  ],
  totalprice:{
    type:String,
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
  fullname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
