const express = require("express");
const router = express.Router();
const { getSpecificProducts } = require("../controllers/productController");
router.route("/:id").get(getSpecificProducts);
module.exports = router;
