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
        alert("You have to log in to add to the wishlist");
      }
      else{
        let arr = state.wishListUsers;
        for (let i = 0; i < arr.length; i++) {
         if(arr[i].id == state.id){
           if(arr[i].wishList.length == 0){
            arr[i].wishList.push(ele);
            console.log(arr);
            
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
              console.log(arr);
              break;
             }
             }
           }
      
          }
        }
      }  
    
  
    return(  
     <div>

    <div className="container">
      <div className="row justify-content-around">


         <div className=" my-5 py-4 Sh-card"  style={{width: "18rem"}}>
                <img className="card-img-top iamge-prodect " src={ele.image}  alt="image item"/>
                    <div className="card-body text-center">
                        <h4 className="card-title title-discription">{ele.title}</h4>
                        <p className="lead">{ele.price + "$"}</p>
                        <NavLink  to={`/ProductDetails/${index}`} className="btn btn-outline-dark me-md-2">Details</NavLink>
                      <button type="button" class="btn btn-outline-danger " onClick={()=>addWishList(ele)} >Add Wish List</button>
                    </div>
          </div>

      </div>
     </div>
     
     </div>
          
    );
   
  }

  
  export default Product;