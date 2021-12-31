import React from "react";

const Content1 = () => {
  return (
    <div className="container" style={{ backgroundColor: "transparent" }}>
      <p
        style={{
          fontSize: "100px",
          textAlign: "center",
          color: "whitesmoke",
          lineHeight: "1em",
        }}
      >
        Good things comes to those who migrate.
      </p>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: "whitesmoke",
          marginRight: "200px",
          marginLeft: "200px",
          marginTop: "70px",
        }}
      >
        With all the automations, integrations, and conversations you need, make
        Shopblocks the heart of your ecommerce business.
      </p>
      <button
        className="btn-info"
        style={{
          marginLeft: "400px",
          marginTop: "30px",
          marginBottom: "150px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "10px",
          paddingTop: "10px",
        }}
      >
        Read more
      </button>
    </div>
  );
};

export default Content1;
