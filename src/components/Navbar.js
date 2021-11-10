import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { setFilter } from "../reducers/products/products";

//import "./Navbar.css";

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
      <div>
        <h4 className="text">
          <ShoppingBasketIcon className="Icon" />
          Online Store
        </h4>
      </div>
      <div className="search">
        <input type="text" onChange={InputName} className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <p>{state.userName}</p>
      <div className="header-nav">
        <Link to="/cart" className="header-link">
          <div className="header-option1">
            <ShoppingCartOutlinedIcon className="Icon" />
            <span className="header-option1 basket-count">0</span>
          </div>
        </Link>
      </div>
      <div className="header-nav">
        <Link to="/wishList" className="header-link">
          <div className="header-option2">
            <FavoriteIcon className="Icon" />
          </div>
        </Link>
      </div>
      <div className="button">
        <Link to="/login">
          <Button variant="btn btn-outline-secondary">Log in</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
