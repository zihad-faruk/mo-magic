const express = require("express");
const router = express.Router();
const { getOrder, createOrders } = require("../controllers/orderController");

router.route("/:id").get(getOrder);
router.route("/").post(createOrders);
module.exports = router;
