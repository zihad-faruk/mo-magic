import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from "../features/products/productSlice";
function ProductList() {
  const disPatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    disPatch(getProducts());
    return () => {
      disPatch(reset());
    };
  }, [isError, message, disPatch]);
  return (
    <div>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <h3>Product</h3>
          ))}
        </div>
      ) : (
        <div>
          <h3>No product available</h3>
        </div>
      )}
    </div>
  );
}

export default ProductList;
