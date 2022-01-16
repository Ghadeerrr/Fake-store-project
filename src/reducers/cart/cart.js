import { stat } from "fs";

const initialState = {
  cartUsers: [{id:1 ,cart:[]},{id:2 ,cart:[]},{id:3 ,cart:[]}],
  preOrders: [{id:1 ,preOrders:[]},{id:2 ,preOrders:[]},{id:3 ,preOrders:[]}],
  elementToDelete: {},
  cartLength:0,
  total:0
};

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      return {
        cartUsers: payload,
        preOrders: state.preOrders,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength,
        total: state.total
      };
      case "DELETE_FROM_CART":
      return {
        cartUsers: state.cartUsers,
        preOrders: state.preOrders,
        elementToDelete: payload,
        cartLength: state.cartLength,
        total: state.total
      };
      case "ADD_CART_LENGTH":
      return {
        cartUsers: state.cartUsers,
        preOrders: state.preOrders,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength+1,
        total: state.total
      };
      case "ADD_TOTAL":
      return {
        cartUsers: state.cartUsers,
        preOrders: state.preOrders,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength,
        total: payload
      };
      case "ADD_ORDER":
      return {
        cartUsers: state.cartUsers,
        preOrders: payload,
        elementToDelete: state.elementToDelete,
        cartLength: state.cartLength,
        total: state.total
      };
      case "DELETE_CART_LENGTH":
      return {
        cartUsers: state.cartUsers,
        preOrders: state.preOrders,
        elementToDelete: state.elementToDelete,
        cartLength: 0,
        total: state.total
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

export const deleteCartLength = () => {
  return {
    type: "DELETE_CART_LENGTH",

  };
};

export const setTotal = (total) => {
  console.log(total);
  
  return {
    type: "ADD_TOTAL",
    payload: total.toFixed(2),
  };
};

export const addOrder = (order) => {
  console.log(order);
  
  return {
    type: "ADD_ORDER",
    payload: order,
  };
};

