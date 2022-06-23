const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add product title"],
    },
    details: {
      type: String,
      required: [false],
    },
    type: {
      type: String,
      required: [true, "Please add type"],
    },
    color_variant: {
      type: String,
      required: [false],
    },
    size_variant: {
      type: String,
      required: [false],
    },
    price: {
      type: Number,
      required: [true, "Please add price"],
    },
    quantity: {
      type: Number,
      required: [true, "Please add quantity"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
