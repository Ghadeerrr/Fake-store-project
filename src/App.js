// import the required components
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import PreviousOrders from "./components/PreviousOrders";
import ProductDetails from "./components/ProductDetails";
import WishList from "./components/WishList";
import Admin from "./components/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts, setFilter } from "./reducers/products/products";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response.data);
        const action = setProducts(response.data);
        dispatch(action);
        const action2 = setFilter(response.data);
        dispatch(action2);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
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
          <Route path="/previousorders" element={<PreviousOrders />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
