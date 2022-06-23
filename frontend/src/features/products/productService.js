import axios from "axios";
const API_URL = "http://localhost:5000/api/products";
//get all products
const getProducts = async () => {
  const config = {};

  const response = await axios.get(API_URL);
};

const productService = {
  getProducts,
};

export default productService;
