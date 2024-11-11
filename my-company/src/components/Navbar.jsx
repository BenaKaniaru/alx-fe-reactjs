import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex", // Flexbox for horizontal layout
        justifyContent: "center", // Center links horizontally
        alignItems: "center", // Center links vertically
        padding: "10px",
        backgroundColor: "#333",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;