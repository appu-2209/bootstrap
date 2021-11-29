import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import { Badge } from "react-bootstrap";
import { data } from "./Constants.js";

function MainPage() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  localStorage.setItem("cart", JSON.stringify(cart));
  const [cartTotal, setCartTotal] = useState(0);
  const [cartTotalNum, setCartTotalNum] = useState(0);
  const products = [
    { Name: "Item 1", Price: 10, Weight: "200" },
    { Name: "Item 2", Price: 100, Weight: "20" },
    { Name: "Item 3", Price: 30, Weight: "300" },
    { Name: "Item 4", Price: 20, Weight: "500" },
    { Name: "Item 5", Price: 30, Weight: "250" },
    { Name: "Item 6", Price: 40, Weight: "10" },
    { Name: "Item 7", Price: 200, Weight: "10" },
    { Name: "Item 8", Price: 120, Weight: "500" },
    { Name: "Item 9", Price: 130, Weight: "790" },
    { Name: "Item 10", Price: 20, Weight: "100" },
    { Name: "Item 11", Price: 10, Weight: "340" },
    { Name: "Item 12", Price: 4, Weight: "800" },
    { Name: "Item 13", Price: 5, Weight: "200" },
    { Name: "Item 14", Price: 240, Weight: "20" },
    { Name: "Item 15", Price: 123, Weight: "700" },
    { Name: "Item 16", Price: 245, Weight: "10" },
    { Name: "Item 17", Price: 230, Weight: "20" },
    { Name: "Item 18", Price: 110, Weight: "200" },
    { Name: "Item 19", Price: 45, Weight: "200" },
    { Name: "Item 20", Price: 67, Weight: "20" },
    { Name: "Item 21", Price: 88, Weight: "300" },
    { Name: "Item 22", Price: 10, Weight: "500" },
    { Name: "Item 23", Price: 17, Weight: "250" },
    { Name: "Item 24", Price: 19, Weight: "10" },
    { Name: "Item 25", Price: 89, Weight: "10" },
    { Name: "Item 26", Price: 45, Weight: "500" },
    { Name: "Item 27", Price: 99, Weight: "790" },
    { Name: "Item 28", Price: 125, Weight: "100" },
    { Name: "Item 29", Price: 198, Weight: "340" },
    { Name: "Item 30", Price: 220, Weight: "800" },
    { Name: "Item 31", Price: 249, Weight: "200" },
    { Name: "Item 32", Price: 230, Weight: "20" },
    { Name: "Item 33", Price: 190, Weight: "700" },
    { Name: "Item 34", Price: 45, Weight: "10" },
    { Name: "Item 35", Price: 12, Weight: "20" },
    { Name: "Item 36", Price: 5, Weight: "200" },
    { Name: "Item 37", Price: 2, Weight: "200" },
    { Name: "Item 38", Price: 90, Weight: "20" },
    { Name: "Item 39", Price: 12, Weight: "300" },
    { Name: "Item 40", Price: 167, Weight: "500" },
    { Name: "Item 41", Price: 12, Weight: "250" },
    { Name: "Item 42", Price: 8, Weight: "10" },
    { Name: "Item 43", Price: 2, Weight: "10" },
    { Name: "Item 44", Price: 9, Weight: "500" },
    { Name: "Item 45", Price: 210, Weight: "790" },
    { Name: "Item 46", Price: 167, Weight: "100" },
    { Name: "Item 47", Price: 23, Weight: "340" },
    { Name: "Item 48", Price: 190, Weight: "800" },
    { Name: "Item 49", Price: 199, Weight: "200" },
    { Name: "Item 50", Price: 12, Weight: "20" },
  ];
  useEffect(() => {
    total();
  }, [cart]);

  // var XLSX = require("xlsx");
  // var dataPath = "itemlist.xlsx";
  // var workbook = XLSX.readFile(dataPath);
  // var sheet_name_list = workbook.SheetNames;
  // var xlsxData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  // console.log(xlsxData);
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].Price;
    }
    setCartTotal(totalVal);
    setCartTotalNum(cart.length);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    document
      .getElementById(item.Name)
      .classList.replace("bg-white", "bg-secondary");
  };

  const deleteFromCart = (item) => {
    let storeItemCopy = [...cart];
    storeItemCopy = storeItemCopy.filter(
      (cartItem) => cartItem.Name !== item.Name
    );
    setCart(storeItemCopy);
    document
      .getElementById(item.Name)
      .classList.replace("bg-secondary", "bg-white");
  };
  const cartItems = cart.map((item) => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-10 col-lg-9 col-md-10 col-sm-10">
          <strong>{`${item.Name}`}</strong>
          {`: ₹${item.Price}`}
        </div>
        <button
          className="col-xl-2 col-lg-3 col-md-2 col-sm-2  btn btn-secondary mt-1 "
          onClick={() => deleteFromCart(item)}
        >
          <Icon.Trash size={20} />
        </button>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row ">
          <div className="col bg-light border">
            <Icon.Flower1 size={29} />
            <strong style={{ fontSize: "1.5rem" }}>{data.CAPTION}</strong>
          </div>
          <div className="col-sm-auto bg-light">
            <button
              className="  border btn "
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <Icon.Cart3 size={30} />
              <Badge>{cartTotalNum}</Badge>
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header flex-column text-center">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <h3 className="modal-title " id="exampleModalLabel">
                      Shopping Cart
                    </h3>

                    <h6>
                      You have{" "}
                      <span>
                        <strong>{cartTotalNum}</strong>
                      </span>{" "}
                      items in shopping cart
                    </h6>
                  </div>

                  <div className="modal-body container">
                    <div className="card mt-1 shadow-sm h-100 d-flex flex-column ">
                      {cartItems}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <h6>Total Price: ₹{cartTotal}</h6>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="d-flex h-100 min-vh-100 ">
        <div className="container-fluid">
          <div className="row">
            {products.map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-1">
                <div
                  className="card mt-1 shadow-sm bg-white h-100 d-flex flex-column "
                  id={item.Name}
                >
                  <h5 className="card-header">{item.Name}</h5>

                  <div className="card-body">
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text">
                        <strong>{data.PRODUCT_PRICE}:</strong>
                      </label>
                      <div className="col-sm-8">{item.Price}</div>
                    </div>
                    <div className="mb-2 row">
                      <label className="col-sm-4 card-text">
                        <strong>{data.PRODUCT_WEIGHT}:</strong>
                      </label>
                      <div className="col-sm-8">{item.Weight}</div>
                    </div>
                  </div>
                  <div className="card-footer align-items-center">
                    {cart.some((p) => p.Name === item.Name) ? (
                      <button
                        className=" btn align-items-center btn-danger"
                        onClick={() => deleteFromCart(item)}
                        id={item.Name}
                      >
                        {data.REMOVE_FROM_CART}
                      </button>
                    ) : (
                      <button
                        className="  btn align-items-center btn-primary "
                        onClick={() => addToCart(item)}
                        id={item.Name}
                      >
                        {data.ADD_TO_CART}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default MainPage;
