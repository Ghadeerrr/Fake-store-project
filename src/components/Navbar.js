import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://i.pinimg.com/564x/fe/ac/53/feac53c307efbfb9438514c0be7734af.jpg"
          alt="logo"
        />
      </Link>
      <div className="search">
        <input type="text" className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header-nav">
        <Link to="/Cart" className="header-link">
          <div className="header-option">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count">0</span>
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <p>WishList</p>
        <Link to="/WishList" className="header-link">
          <div className="header-option">
            <FavoriteIcon />
          </div>
        </Link>
      </div>
      <div className="button">
        <Button variant="outline-warning">Log in</Button>{" "}
      </div>
    </nav>
  );
}

export default Navbar;
