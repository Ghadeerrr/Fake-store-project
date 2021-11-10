import { stat } from "fs";

const initialState = {
  cartUsers: [{id:1 ,cart:[]},{id:2 ,cart:[]},{id:3 ,cart:[]}],
  elementToDelete: {},
  cartLength:0,
  total:0
};

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      return {
        cartUsers: payload,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength,
        total: state.total
      };
      case "DELETE_FROM_CART":
      return {
        cartUsers: state.cartUsers,
        elementToDelete: payload,
        cartLength: state.cartLength,
        total: state.total
      };
      case "ADD_CART_LENGTH":
      return {
        cartUsers: state.cartUsers,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength+1,
        total: state.total
      };
      case "ADD_TOTAL":
      return {
        cartUsers: state.cartUsers,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength,
        total: payload
      };
      
    default:
      return state;
  }
};
export default Cart;

export const setCartUsers = (cartUsers) => {
  console.log(cartUsers);
  return {
    type: "ADD_CART",
    payload: cartUsers,

  };
};

export const setElement = (element) => {
  return {
    type: "DELETE_FROM_CART",
    payload: element,

  };
};

export const setCartLength = () => {
  return {
    type: "ADD_CART_LENGTH",

  };
};

export const setTotal = (total) => {
  console.log(total);
  
  return {
    type: "ADD_TOTAL",
    payload: total.toFixed(2),
  };
};

