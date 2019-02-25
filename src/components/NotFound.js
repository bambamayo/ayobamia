import React from "react";
import { Link } from "react-router-dom";
import "../NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>SORRY!!! This page does not exist</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
