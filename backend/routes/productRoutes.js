const express = require("express");
const router = express.Router();
const {
  getProducts,
  createProducts,
} = require("../controllers/productController");
const { getSpecificProducts } = require("../controllers/productController");
router.route("/").get(getProducts).post(createProducts);
module.exports = router;
