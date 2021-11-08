const initialState = {
  cart: [],
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      console.log(state.cart);
      return {
        cart: payload,
      };

    default:
      return state;
  }
};

export default cart;

export const cart = (cart) => {
  console.log(cart);
  return {
    type: "ADD_CART",
    payload: cart,
  };
};
