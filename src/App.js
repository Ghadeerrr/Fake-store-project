// import the required components
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import ProductDetails from "./components/ProductDetails";
import WishList from "./components/WishList";
import Admin from "./components/Admin"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
