
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts,setFilter } from "../reducers/products/products";

function Categories() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      products: state.products.products,
      filter: state.products.filter

    };
  });

  function AllProducts() {
    const action = setFilter(state.products);
    dispatch(action);
   
  }
 
  function filterCategory(Category) {

    
      axios.get(`https://fakestoreapi.com/products/category/${Category}`)
      .then(function (response) {
        console.log(response.data);
        const action2 = setFilter(response.data);
      dispatch(action2);
  
      }).catch(function (error) {
        console.error(error);
      });
  

  }
    return(  
     <div>

      <nav>
      <div >
          <button  onClick={()=>AllProducts()}>All</button>
          <button  onClick={()=>filterCategory("men's clothing")}>Men's Clothing</button>
          <button  onClick={()=>filterCategory("women's clothing")}> Women's Clothing</button>
          <button  onClick={()=>filterCategory("jewelery")}>Jewelery</button>
          <button  onClick={()=>filterCategory("electronics")}>Electronic</button>
        </div>
      </nav>
     </div>
          
    );  
  }

  

  export default Categories;