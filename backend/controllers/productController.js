const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

const getSpecificProducts = asyncHandler(async (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new Error("Not a valid id");
  }
  const specific_product = await Product.findById(req.params.id);
  if (!specific_product) {
    res.status(400);
    throw new Error("No product found");
  }
  res.status(200).json(specific_product);
});

const createProducts = asyncHandler(async (req, res) => {
  var type_arr = ["single", "multiple"];
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please specify a title");
  }
  if (!req.body.type || !type_arr.includes(req.body.type)) {
    res.status(400);
    throw new Error("Please specify a valid type");
  }
  if (!req.body.price) {
    res.status(400);
    throw new Error("Please specify a price");
  }

  if (!req.body.quantity) {
    res.status(400);
    throw new Error("Please specify a quantity");
  }

  if (req.body.type == "multiple") {
    if (!req.body.color_variant && !req.body.size_variant) {
      res.status(400);
      throw new Error("Multiple type product needs atleast one variant");
    }
  }

  const product = await Product.create({
    type: req.body.type,
    price: req.body.price,
    quantity: req.body.quantity,
    title: req.body.title,
    details: req.body.details,
    color_variant: req.body.color_variant,
    size_variant: req.body.size_variant,
  });
  res.status(200).json(product);
});

module.exports = {
  getProducts,
  createProducts,
  getSpecificProducts,
};
