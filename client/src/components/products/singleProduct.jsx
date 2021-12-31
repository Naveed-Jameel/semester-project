import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product, index }) => {
  return (
    <>
      <div
        className="container col-sm-4"
        style={{ backgroundColor: "transparent" }}
      >
        <div class="card text-left" style={{ marginBottom: "15px" }}>
          <img
            class="card-img-top"
            src={product.picture}
            alt="not available"
            style={{ height: "300px" }}
          />
          <div class="card-body" style={{ position: "relative" }}>
            <h4 class="card-title">{product.name}</h4>
            <p class="card-text">{"$" + product.price}</p>
            <Link
              to="/order/buyerpage"
              class="btn btn-primary"
              style={{ position: "absolute", top: "60px", right: "5px" }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
