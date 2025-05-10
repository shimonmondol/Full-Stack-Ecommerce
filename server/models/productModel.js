const { default: mongoose, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: [
      {
        type: String,
        default: true,
      },
    ],
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    sellingprice: {
      type: Number,
      required: true,
    },
    discountprice: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    color: [
      {
        type: String,
        enum: ["black", "gray", "white"],
      },
    ],
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
