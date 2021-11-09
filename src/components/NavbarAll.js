import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavbarAll.css";

function NavbarAll() {
  const state = useSelector((state) => {
    return {
      userName: state.loginDetails.userName,
      products: state.products.products,
      filter: state.products.filter,
    };
  });
  return (
    <nav className="header">
      <div className="header-navbar">
        <Link to="/" className="header-link">
          <div className="header-icon">
            <HomeIcon />
          </div>
        </Link>
      </div>

      <p>{state.userName}</p>
      <div className="header-navbar">
        <Link to="/cart" className="header-link">
          <div className="header-icon">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count">0</span>
          </div>
        </Link>
      </div>
      <div className="header-navbar">
        <Link to="/wishList" className="header-link">
          <div className="header-icon">
            <FavoriteIcon />
          </div>
        </Link>
      </div>
      <div className="button">
        <Link to="/login">
          <Button classNamr="Btn" variant="outline-warning">
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarAll;
