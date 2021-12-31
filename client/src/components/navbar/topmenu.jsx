import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./topmenu.css";

// import { useSelector, useDispatch } from "react-redux";
// import changeTheState from "../redux/Action";

const TopMenue = (props) => {
  // const dispatch = useDispatch();
  // const myState = useSelector((state) => state.changeTheState);
  // console.log(myState);

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const history = useHistory();

  const onlogout = () => {
    setToken(localStorage.removeItem("token"));
    setRole(localStorage.removeItem("role"));
    history.push("/");
  };

  return (
    <>
      <nav
        className="container-fluid sticky-top"
        style={{ marginBottom: "10px" }}
      >
        <ul className="navul ">
          <li>
            <Link to="/">
              <i class="fas fa-house-user" style={{ fontSize: "2em" }}></i>
            </Link>
          </li>
          <li>
            <Link to="/products" className="anchor">
              Products
            </Link>
          </li>

          <li>
            <Link to="/contact" className="anchor">
              Contact
            </Link>
          </li>
          {token ? (
            <li
              style={{ float: "right", paddingTop: "8px", marginRight: "50px" }}
            >
              <Link to="#" className="anchor" onClick={onlogout}>
                logout
              </Link>
            </li>
          ) : (
            <>
              <li
                style={{
                  float: "right",
                  paddingTop: "8px",
                  marginRight: "50px",
                }}
              >
                <Link to="/login" className="anchor">
                  Login
                </Link>
              </li>
              <li style={{ float: "right", paddingTop: "8px" }}>
                <Link to="/register" className="anchor">
                  Register
                </Link>
              </li>
            </>
          )}
          {role == "admin" && (
            <li
              style={{ float: "right", paddingTop: "8px", marginRight: "15px" }}
              className="anchor"
            >
              <a
                href="http://localhost:4000/products"
                rel="noopener noreferrer"
              >
                Admin Panel
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default TopMenue;
