import React from "react";
import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">Go back</Link>
    </div>
  );
};
