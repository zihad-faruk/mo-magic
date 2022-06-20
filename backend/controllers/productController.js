const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "getting r" });
});

const createProducts = asyncHandler(async (req, res) => {
  if (!req.body.type) {
    res.status(400);
    throw new Error("Please specify a type");
  }
  res.status(200).json({ msg: "creating r" });
});

module.exports = {
  getProducts,
  createProducts,
};
