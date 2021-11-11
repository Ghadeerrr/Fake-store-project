import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { setFilter } from "../reducers/products/products";

import "./Navbar.css";

function Navbar() {
  const [keyword, setkeyword] = useState("");
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      userName: state.loginDetails.userName,
      products: state.products.products,
      filter: state.products.filter,
      cartLength: state.Cart.cartLength,
    };
  });

  const InputName = (e) => {
    search(e.target.value.toLocaleLowerCase());
  };

  const search = (keyword) => {
    let newArray = [];
    let Key = "title";

    state.products.map((ele, index) => {
      let str = ele.title.toLocaleLowerCase();

      if (str.match(keyword)) {
        newArray.push(ele);
      }
    });

    const action = setFilter(newArray);
    dispatch(action);
  };

  return (
    <nav className="header">
      <div className="header-option">
        <ShoppingBasketIcon className="Icon" />
      </div>
      <h5 className="text">
        <span>O</span>nline <span>S</span>tore
      </h5>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          onChange={InputName}
          className="searchInput"
        />
        <SearchIcon className="searchIcon" />
      </div>
      <p className="user-p"> {state.userName}</p>
      <div className="header-nav">
        <Link to="/cart" className="header-link">
          <div className="header-option1">
            <span className="header-option1 basket-count">
              {state.cartLength}
            </span>
            <ShoppingCartOutlinedIcon className="Icon-cart" />
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/wishList">
          <div className="header-option">
            <FavoriteIcon className="Icon" />
          </div>
        </Link>
      </div>
      <div className="button">
        <Link to="/login">
          <Button variant="btn btn-outline-dark">Log in</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
