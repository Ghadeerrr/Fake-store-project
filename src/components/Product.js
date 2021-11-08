import { Button,Card } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setWishList } from "../reducers/wishList/wishList"
import { useDispatch } from "react-redux";

function Product({ele,index}) {
 
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      filter: state.products.filter
    };
  });
    console.log(ele);

    
  
    const addWishList = (ele)=>{
     
      // setCurrentPage(1);
      const action = setWishList(ele);
      dispatch(action);
      
    } 
  
    return(  
     <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ele.image} />
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Title>{ele.price + "$"}</Card.Title>
          <NavLink to={`/ProductDetails/${index}`} class="btn btn-outline-dark">
              Details
            </NavLink>
          </Card.Body>
          <button  onClick={()=>addWishList(ele)} >Wish List</button>
    </Card>
    
     </div>
      
    
    );
   
  }

  
  export default Product;