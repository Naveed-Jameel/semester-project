import React from "react";
import "./buyerPagescript.js";

const BuyerPage = () => {
  return (
    <div className="row" style={{ backgroundColor: "white" }}>
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 offset-1">
            <img
              src="buyerimg.jpg"
              alt="product img"
              style={{ height: "100px", width: "100px" }}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-4">
            <h3>About Product</h3>
            <p>
              SteelSeries Rival 3 Gaming Mouse - 8,500 CPI TrueMove Core Optical
              Sensor - 6 Programmable Buttons - Split Trigger Buttons -
              Brilliant Prism RGB Lighting
            </p>
          </div>
          <div className="col-sm-7">
            <h3>Delivery Details</h3>
            <form className="">
              <div class="form-group" style={{ marginBottom: "10px" }}>
                <span
                  style={{
                    border: "1px solid black",
                    padding: "0 5px 5px 5px",
                    fontSize: "0.8em",
                    borderRadius: "5px",
                    backgroundColor: "lightcyan",
                  }}
                >
                  <label for="productqnty">qty: </label>
                  <select
                    name="productqnty"
                    id="productqnty"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "lightcyan",
                    }}
                  >
                    <option value="" selected>
                      1
                    </option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                  </select>
                </span>
              </div>
              <div class="form-group" style={{ marginBottom: "7px" }}>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Your Name"
                  name="name"
                  style={{ border: "none", borderBottom: "1px solid black" }}
                />
              </div>
              <div class="form-group" style={{ marginBottom: "7px" }}>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter full delivery Address"
                  style={{ border: "none", borderBottom: "1px solid black" }}
                />
              </div>
              <div class="form-group" style={{ marginBottom: "10px" }}>
                <p style={{ display: "inline", marginLeft: "5px" }}>
                  Enter phone number:{" "}
                </p>
                <input id="phone" type="tel" name="phone" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerPage;
