import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import getProducts from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        console.log("fdf");
      })
      .addCase(getProducts.fullfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
        console.log(action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        console.log(action.payload);
      });
  },
});
