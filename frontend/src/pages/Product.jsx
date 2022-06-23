import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";

function Product() {
  const params = useParams();

  return (
    <div>
      <Header title="Home" />
      <ProductItem id={params.id} />
    </div>
  );
}

export default Product;
