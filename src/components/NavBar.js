import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  padding: "10px 20px 10px 20px",
  margin: "10px 10px 10px 10px",
  background: "#f1d302",
  textDecoration: "none",
  color: "white",
  justifyContent: "center",
  textAlign: "center",
  borderRadius: "8px",
};

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/Purchases"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Purchases
      </NavLink>

      <NavLink
        to="/Wishlist"
        exact
        style={linkStyles}
        className="nav-bar-route"
        activeStyle={{
          background: "#235789",
        }}
      >
        Wishlist
      </NavLink>
    </div>
  );
}

export default NavBar;
