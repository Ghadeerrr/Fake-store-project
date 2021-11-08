 import { useSelector } from "react-redux";
 import Product from "./Product";

function WishList() {
  const state = useSelector((state) => {
    return {
      wishListUsers: state.wishList.wishListUsers,
      id: state.loginDetails.id,
    };
  });
  
  let array = state.wishListUsers[state.id-1].wishList;
console.log(state.wishListUsers[state.id-1].wishList);

    
  
    return(  
     <div id="grid">
      
      {array.map((ele,index)=><Product index={index} ele={ele}/>)}
     
     
     </div>
      
    
    );
   
  }
  
  export default WishList;