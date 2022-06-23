const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 500;
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const connectDB = require("../backend/config/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/product", require("./routes/productSpecificRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port:${port}`));
