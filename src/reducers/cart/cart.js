const initialState = {
  cartUsers: [{id:1 ,cart:[]},{id:2 ,cart:[]},{id:3 ,cart:[]}],
};

const Cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      return {
        cartUsers: payload,
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
