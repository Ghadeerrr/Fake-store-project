import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../reducers/products/products";




function Products() {
  const dispatch = useDispatch();

  useEffect(() => {

    axios.get('https://fakestoreapi.com/products').then(function (response) {
      console.log(response.data);
      const action = setProducts(response.data);
      dispatch(action);
    }).catch(function (error) {
      console.error(error);
    });
  },[]);

  const state = useSelector((state) => {
    return {
      products: state.products.Allproducts
    };
  });


    return( 
      <div id="grid">
            {/* {state.Allproducts.map((ele,index)=><Video ele={ele} index={index}/>)} */}
            </div>
   
    );
   
  }
  
  export default Products;