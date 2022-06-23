const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    product_id: {
      type: String,
      required: [true, "Please add product product id"],
    },
    quantity: {
      type: String,
      required: [true, "Need the quantity"],
    },
    price: {
      type: String,
      required: [true, "Need the price"],
    },
    size: {
      type: String,
      required: [false, "Need the price"],
    },
    color: {
      type: String,
      required: [false, "Need the price"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
