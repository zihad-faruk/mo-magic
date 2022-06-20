const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 500;
const { errorHandler } = require("../backend/middleware/errorMiddleware");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port:${port}`));
