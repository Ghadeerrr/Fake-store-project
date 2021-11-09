 import { useSelector } from "react-redux";
 import WishListEle from "./WishListEle";

function WishList() {
  const state = useSelector((state) => {
    return {
      wishListUsers: state.wishList.wishListUsers,
      id: state.loginDetails.id,
    };
  });
  
console.log(state.wishListUsers[state.id-1].wishList);

  
    return(  
     <div id="grid">
      
      {state.wishListUsers[state.id-1].wishList.map((ele,index)=><WishListEle index={index} ele={ele}/>)}
     
     
     </div>
      
    
    );
   
  }
  
  export default WishList;