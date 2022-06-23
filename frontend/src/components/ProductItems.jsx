import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const baseURL = process.env.REACT_APP_API_BASE_URL + "/products";

function ProductItems() {
  const [products, setProduct] = React.useState(null);

  const divStyle = {
    margin: "40px",
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!products) return null;

  return (
    <div>
      <div>
        {products.map((product) => (
          <div>
            <Link to={`/product/${product._id}`}>
              <div style={divStyle}>
                <div className="proName" style={{ float: "left" }}>
                  <h3>{product.title ? product.title : "Default Product"}</h3>
                </div>
                <div style={{}}>
                  <h6>{product.type ? product.type : "Single"}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductItems;
