import React from "react";
//import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router";
import TopMenue from "../navbar/topmenu";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleLogin = () => {
    if (!(email || password)) return alert("Please fill all filed");
    axios
      .post("http://localhost:4000/users/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
        localStorage.setItem("refresh", true);
        history.push("/products");
      })
      .catch((err) => {
        console.log("err" + err);
        history.push("/register");
      });
  };

  return (
    <div style={{ marginBottom: "500px" }}>
      <p
        style={{
          textAlign: "center",
          fontSize: "3em",
          color: "white",
          marginTop: "30px",
        }}
      >
        Login
      </p>
      <div class="box">
        <form>
          <span class="text-center"></span>
          <div class="input-container">
            <input
              type="text"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email</label>
          </div>
          <div class="input-container">
            <input
              type="text"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
          <button type="button" class="btn1" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
