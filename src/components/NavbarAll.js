import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

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
      <div className="navbar-home">
        <Link to="/" className="header-link">
          <div className="header-icon">
            <HomeIcon className="IconHome" />
          </div>
        </Link>
      </div>

      <p>{state.userName}</p>
      <div className="navbar-cart">
        <Link to="/cart" className="header-link">
          <div className="header-icon">
            <ShoppingCartOutlinedIcon className="Icon" />
            <span className="basket-count">0</span>
          </div>
        </Link>
      </div>
      <div className="navbar-Favorite">
        <Link to="/wishList" className="header-link">
          <div className="header-icon">
            <FavoriteIcon className="Icon" />
          </div>
        </Link>
      </div>
      <div className="navbar-button">
        <Link to="/login">
          <Button classNamr="Btn" variant="outline-dark">
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarAll;
