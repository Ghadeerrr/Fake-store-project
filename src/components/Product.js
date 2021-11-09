import { Card } from 'react-bootstrap';
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setWishList } from "../reducers/wishList/wishList";

function Product({ele,index}) {
 
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      wishListUsers: state.wishList.wishListUsers,
      id: state.loginDetails.id,
    };
  });

    const addWishList = (ele)=>{
      console.log(state.id);
      
      if(state.id == 0){
        console.log("you have to log in to add to the wishlist");
        
        // `<alert`
      }
      else{
        let arr = state.wishListUsers;
        for (let i = 0; i < arr.length; i++) {
         if(arr[i].id == state.id){
           if(arr[i].wishList.length == 0){
            arr[i].wishList.push(ele);
            const action = setWishList(arr);
            dispatch(action);
            break;
           }
           else{
             let eleExist=false;
             for (let j = 0; j < arr[i].wishList.length; j++) {
              if(arr[i].wishList[j].id == ele.id){
                eleExist=true;
              } 
             }
             if(!eleExist){
              arr[i].wishList.push(ele);
              const action = setWishList(arr);
              dispatch(action);
              break;
             }
             }
           }
      
          }
        }
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