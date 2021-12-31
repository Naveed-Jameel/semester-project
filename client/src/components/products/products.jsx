import React from "react";
import SingleProduct from "./singleProduct";
import axios from "axios";
import { useHistory } from "react-router";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  let history = useHistory();

  let getProducts = () => {
    axios
      .get("http://localhost:4000/products/items", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        console.log("error in getting products");
        alert("First Login Please");
        history.push("/");
      });
  };

  React.useEffect(() => {}, [token]);
  React.useEffect(() => {
    if (localStorage.getItem("refresh")) {
      localStorage.removeItem("refresh");
      window.location.reload(false);
    }
    getProducts();
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundColor: "transparent", marginBottom: "200px" }}
    >
      {products.length === 0 ? (
        <p>No products Available at this moment</p>
      ) : (
        <div className="row">
          {products.map((product, index) => (
            <SingleProduct index={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
