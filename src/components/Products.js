import { useSelector } from "react-redux";

import Product from "./Product";
import "./components.css";

function Products({ currentProduct }) {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
      filter: state.products.filter,
    };
  });

  return (
    <div id="grid">
      {currentProduct.length == 0 ? (
        <h1>No pRODUCTS</h1>
      ) : (
        currentProduct.map((ele, index) => <Product index={index} ele={ele} />)
      )}
    </div>
  );
}

export default Products;
