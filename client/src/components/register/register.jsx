import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";
const Register = () => {
  let history = useHistory();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="row" style={{ marginBottom: "200px" }}>
      <h3 style={{ marginLeft: "425px", color: "white", fontWeight: "bold" }}>
        Register
      </h3>
      <form className="col-sm-4 offset-4 mt-5" style={{ position: "relative" }}>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          className="btnicon"
          style={{
            color: "black",
            backgroundColor: "transparent",
            position: "relative",
            border: "none",
          }}
          onClick={() => {
            axios
              .post("http://localhost:4000/users/register", {
                name,
                email,
                password,
              })
              .then(() => {
                history.push("/login");
              })
              .catch(() => {
                console.log("error register");
              });
          }}
        >
          <p style={{ position: "absolute", top: "3px" }}>Register</p>
          <i
            class="fas fa-sign-in-alt"
            style={{ fontSize: "2em", marginLeft: "60px" }}
          ></i>
        </button>

        <Link
          to="/login"
          style={{ position: "absolute", top: "185px", right: "20px" }}
        >
          <p>Login?</p>
        </Link>
      </form>
    </div>
  );
};

export default Register;
