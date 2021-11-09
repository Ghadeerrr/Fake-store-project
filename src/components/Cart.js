import { useSelector } from "react-redux";
 import Product from "./Product";


function Cart() {
const state = useSelector((state) => {
    return {
      cartUsers: state.Cart.cartUsers,
      id: state.loginDetails.id,
    };
  });

  let array = state.cartUsers[state.id-1].cart;
console.log(state.cartUsers[state.id-1].cart);
  return(
    <div>
    
    </div>
  );
  
}

export default Cart;
