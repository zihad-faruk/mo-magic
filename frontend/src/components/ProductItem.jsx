import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import Popup from "../components/Popup";

import {
  FaUser,
  FaCartPlus,
  FaHeart,
  FaCircle,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

function ProductItem(props) {
  const orderUrl = process.env.REACT_APP_API_BASE_URL + "/order";
  const baseURL = process.env.REACT_APP_API_BASE_URL + "/product/" + props.id;

  const [products, setProduct] = React.useState(null);
  const [counter, setCounter] = React.useState(1);
  const [qt, setQt] = React.useState(0);
  const [sSize, setSize] = React.useState(null);
  const [sColor, setColor] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [successText, setsuccessText] = React.useState("--");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProduct(response.data);
      setQt(response.data.quantity);
    });
  }, []);

  if (!products) return null;
  var color_arr = [];
  var size_arr = [];
  var quantity = products.quantity ? products.quantity : 0;
  if (products.color_variant) {
    color_arr = products.color_variant.split(",");
  }

  if (products.size_variant) {
    size_arr = products.size_variant.split(",");
  }

  const handleClick1 = () => {
    if (counter >= qt) {
      return;
    }
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    if (counter <= 1) {
      return;
    }
    setCounter(counter - 1);
  };

  function selectSize(s) {
    setSize(s);
  }

  function selectColor(s) {
    setColor(s);
  }

  function createOrder() {
    if (counter > qt || qt <= 0) {
      alert("Product not available");
      return;
    }
    axios
      .post(orderUrl, {
        product_id: props.id,
        quantity: counter,
        amount: products.price * counter,
        size: sSize,
        color: sColor,
      })
      .then((response) => {
        if (response.data._id) {
          setsuccessText(response.data._id);
          setQt(qt - counter);
          togglePopup();
        } else {
          alert("something went wrong");
        }
      });
  }

  return (
    <div>
      <div>
        <div>
          <section className="content">
            <div className="card card-solid">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h3 className="d-inline-block d-sm-none">
                      LOWA Men’s Renegade GTX Mid Hiking Boots Review
                    </h3>
                    <div className="col-12">
                      <img
                        src="../img/prod-1.jpg"
                        className="product-image"
                        alt="Product Image"
                      />
                    </div>
                    <div className="col-12 product-image-thumbs">
                      <div className="product-image-thumb active">
                        <img src="../img/prod-1.jpg" alt="Product Image" />
                      </div>
                      <div className="product-image-thumb">
                        <img src="../img/prod-2.jpg" alt="Product Image" />
                      </div>
                      <div className="product-image-thumb">
                        <img src="../img/prod-3.jpg" alt="Product Image" />
                      </div>
                      <div className="product-image-thumb">
                        <img src="../img/prod-4.jpg" alt="Product Image" />
                      </div>
                      <div className="product-image-thumb">
                        <img src="../img/prod-5.jpg" alt="Product Image" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h3 className="my-3">
                      {products.title ? products.title : "No title"}
                    </h3>
                    <p>{products.details ? products.details : ""}</p>

                    {products.type == "multiple" ? (
                      <div>
                        <hr />

                        {products.color_variant ? (
                          <div>
                            <h4>Available Colors</h4>
                            <div
                              className="btn-group btn-group-toggle"
                              data-toggle="buttons"
                            >
                              {color_arr.map((c_p) => (
                                <>
                                  <label className="btn btn-default text-center active">
                                    <input
                                      type="radio"
                                      name="color_option"
                                      id="color_option_a1"
                                      autocomplete="off"
                                      checked
                                      onClick={() => selectColor(c_p)}
                                    />
                                    {c_p}
                                    <br />
                                  </label>
                                </>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}

                        {products.size_variant ? (
                          <div>
                            <h4 className="mt-3">
                              <small>Please select size</small>
                            </h4>
                            <div
                              className="btn-group btn-group-toggle"
                              data-toggle="buttons"
                            >
                              {size_arr.map((size) => (
                                <>
                                  <label className="btn btn-default text-center">
                                    <input
                                      type="radio"
                                      name="color_option"
                                      id="color_option_b1"
                                      autocomplete="off"
                                      onClick={() => selectSize(size)}
                                    />

                                    <br />
                                    {size}
                                  </label>
                                </>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div>
                      <div
                        className="row"
                        style={{ margin: "6vh 0vh 0vh 0vh", padding: "5px" }}
                      >
                        <div className="col-md-6">Available: {qt}</div>
                        <div
                          className="col-md-6"
                          style={{
                            border: "1px solid",
                            "border-color": "#ddd",
                            "background-color": "#f8f9fa",
                            padding: "6px",
                          }}
                        >
                          <div className="dec-btn" style={{ float: "left" }}>
                            <FaMinus onClick={handleClick2} />
                          </div>
                          <span>{counter}</span>
                          <div className="inc-btn" style={{ float: "right" }}>
                            <FaPlus onClick={handleClick1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray py-2 px-3 mt-4">
                      <h2 className="mb-0">
                        BDT {products.price ? products.price : "0.00"}
                      </h2>
                    </div>

                    <div className="mt-4">
                      <div
                        onClick={createOrder}
                        className="btn btn-primary btn-lg btn-flat"
                      >
                        <FaCartPlus /> Buy now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 3.2.0
          </div>
          <strong>
            Copyright &copy; 2014-2021
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>

        <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Order Created successfully</b>
              <br />
              <b>Order Id: {successText}</b>
              <p>Please use the order id to test order details api</p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default ProductItem;
