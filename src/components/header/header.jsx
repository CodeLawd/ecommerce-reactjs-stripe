import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          {" "}
          <Logo />
        </Link>
      </div>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>

        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
