import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Pagination from "./Pagination";
import Categories from "./Categories";
import Footer from "./Footer";
import { setProducts, setFilter } from "../reducers/products/products";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import AdvertisingSlides from "./AdvertisingSlides";
import ProductPrice from "./ProductsPrice";
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { Button } from "react-bootstrap";
import Admain from "./Admin";
import "./Categories.css";

function Home() {
  let toggle = false;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);


  

  const state = useSelector((state) => {
    return {
      products: state.products.products,
      filter: state.products.filter,
      loginDetails: state.loginDetails.loginDetails,
      wishListUsers: state.wishList.wishListUsers,
      id: state.loginDetails.id,
    };
  });
  if(state.id == 1){
    toggle = true;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = state.filter.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(currentProduct);
  console.log(state.loginDetails);
  console.log(state.wishListUsers);
  return (
    <div>
      <Navbar />
      <AdvertisingSlides />
      {/* <Admain/> */}
      <div className="Button-admin">
      {toggle&& <Link to="/admin">
      <Button variant="danger">
      Admin page
      </Button>
      </Link>}
      </div>
      <div className="Filtration">
      <Categories setCurrentPage={setCurrentPage} />
      <ProductPrice />
      </div>
      <Products currentProduct={currentProduct} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={state.filter.length}
        paginate={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default Home;
