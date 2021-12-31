import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";
const Contact = () => {
  return (
    <div style={{ marginBottom: "200px" }}>
      <p style={{ textAlign: "center", fontSize: "3em", color: "white" }}>
        LEAVE MAIL US
      </p>
      <hr
        style={{
          width: "150px",
          height: "2px",
          marginLeft: "500px",
          marginTop: "-20px",
          color: "green",
        }}
      />
      <p style={{ textAlign: "center", color: "white", marginTop: "-10px" }}>
        we will back to soon
      </p>
      <div className="container row" style={{ backgroundColor: "transparent" }}>
        <div className="col-sm-4 offset-4">
          <input
            className="input-container input-container12"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="input-container input-container12"
            type="text"
            placeholder="Your Email"
          />
          <textarea
            className="textarea"
            cols="35"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          <button className="btn-success" style={{ border: "none" }}>
            send
          </button>
        </div>

        <div className="col-sm-4 " style={{ paddingLeft: "100px" }}>
          <div className="row">
            <div className="col-sm-6">
              <Link to="">
                <span>
                  <i
                    class="fab fa-facebook-square"
                    style={{
                      fontSize: "7em",
                    }}
                  ></i>
                </span>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="">
                <span className="twitter">
                  <i
                    className="twitter fab fa-twitter-square"
                    style={{ fontSize: "7em" }}
                  ></i>
                </span>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="">
                <span className="insta">
                  <i class="fab fa-instagram" style={{ fontSize: "7em" }}></i>
                </span>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="mailto:naveedjameel781@gmail.com">
                <span className="google">
                  <i
                    class="fab fa-google-plus-square"
                    style={{ fontSize: "7em" }}
                  ></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
