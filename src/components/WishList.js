 import { useSelector } from "react-redux";
 import WishListEle from "./WishListEle";
 import { useState } from "react";

function WishList() {
  const [toggle,setToggle]=useState(true);
  const state = useSelector((state) => {
    return {
      wishListUsers: state.wishList.wishListUsers,
      id: state.loginDetails.id,
    };
  });
  
//   let array = state.wishListUsers[state.id-1].wishList;
console.log(state.wishListUsers[state.id-1].wishList);
// console.log(array);

    // if(state.wishListUsers[state.id-1].wishList == undefined){
    //   console.log("toggle false");
      
    //   setToggle(false);
    // }
  
    return(  
     <div id="grid">
      
      {state.wishListUsers[state.id-1].wishList.map((ele,index)=><WishListEle index={index} ele={ele}/>)}
     
     
     </div>
      
    
    );
   
  }
  
  export default WishList;