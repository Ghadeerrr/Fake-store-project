import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
      <Link to="/">
        <img
          className="header-logo"
          src="https://i.pinimg.com/564x/fe/ac/53/feac53c307efbfb9438514c0be7734af.jpg"
          alt="logo"
        />
      </Link>
      <div className="search">
        <input type="text" placeholder="Search" onChange={InputName} className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <p>{state.userName}</p>
      <div className="header-nav">
        <Link to="/cart" className="header-link">
          <div className="header-option">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count">0</span>
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/wishList" className="header-link">
          <div className="header-option">
            <FavoriteIcon />
          </div>
        </Link>
      </div>
      <div className="button">
        <Link to="/login">
          <Button variant="outline-warning">Log in</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
