import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../reducers/products/products";
import { Button } from "react-bootstrap";
import "./Categories.css";

function Categories({ setCurrentPage }) {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      products: state.products.products,
      filter: state.products.filter,
    };
  });

  function AllProducts() {
    const action = setFilter(state.products);
    dispatch(action);
  }


  function filterCategory(Category) {
    setCurrentPage(1);
    axios
      .get(`https://fakestoreapi.com/products/category/${Category}`)
      .then(function (response) {
        console.log(response.data);
        const action2 = setFilter(response.data);
        dispatch(action2);
      })
      .catch(function (error) {
        console.error(error);
      });

  }
  return (
    <div className="Categories">
      <nav>
        <div className="Buttons d-flex justify-content-center mb-5 pb-5 ">
          <Button variant="outline-dark" onClick={() => AllProducts()}>
            All
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => filterCategory("men's clothing")}
          >
            Men's Clothing
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => filterCategory("women's clothing")}
          >
            Women's Clothing
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => filterCategory("jewelery")}
          >
            Jewelery
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => filterCategory("electronics")}
          >
            Electronic
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Categories;
