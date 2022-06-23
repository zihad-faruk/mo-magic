import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";

function products() {
  const divStyle = {
    margin: "40px",
    border: "5px solid pink",
  };

  return (
    <div>
      <Header title="Home" />

      <Link to={`/product/1`}>
        <div style={divStyle}>
          <li>Product 1</li>
        </div>
      </Link>
      <Link to={`/product/2`}>
        <li>Product 2</li>
      </Link>
    </div>
  );
}

export default products;
