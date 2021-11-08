import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import Pagination from "./Pagination";
import Categories from "./Categories";
import { setProducts, setFilter } from "../reducers/products/products";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import AdvertisingSlides from "./AdvertisingSlides";
import ProductPrice from "./ProductsPrice";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
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

  const state = useSelector((state) => {
    return {
      products: state.products.products,
      filter: state.products.filter,
    };
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = state.filter.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(currentProduct);

  return (
    <div>
      <Navbar />
      <AdvertisingSlides />
      <Categories setCurrentPage={setCurrentPage} />
      <ProductPrice />
      <Products currentProduct={currentProduct} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={state.filter.length}
        paginate={setCurrentPage}
      />
    </div>
  );
}

export default Home;
