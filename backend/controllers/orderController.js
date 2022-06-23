const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");

const getOrder = asyncHandler(async (req, res) => {
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    throw new Error("Not a valid id");
  }
  const specific_order = await Order.findById(req.params.id);
  if (!specific_order) {
    res.status(400);
    throw new Error("No order found");
  }
  res.status(200).json(specific_order);
});

const createOrders = asyncHandler(async (req, res) => {
  if (!req.body.product_id) {
    res.status(400);
    throw new Error("Please specify a product");
  }

  if (!req.body.quantity) {
    res.status(400);
    throw new Error("Please specify a quantity");
  }

  if (!req.body.amount) {
    res.status(400);
    throw new Error("Please specify a price");
  }

  const order = await Order.create({
    quantity: req.body.quantity,
    product_id: req.body.product_id,
    price: req.body.amount,
    size: req.body.size,

    color: req.body.color,
  });

  Product.findById(req.body.product_id, function (err, p) {
    if (!p) return next(new Error("Could not load Document"));
    else {
      // do your updates here
      p.quantity = p.quantity - req.body.quantity;

      p.save(function (err) {});
    }
  });

  order;
  res.status(200).json(order);
});

module.exports = {
  getOrder,
  createOrders,
};
