const initialState = {
  cartDetails: [],
};

const cartDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CART":
      console.log(state.cartDetails);

      return {
        cartDetails: payload,
      };

    default:
      return state;
  }
};

export default cartDetails;

export const setCartDetails = (cartDetails) => {
  console.log(cartDetails);
  return {
    type: "SET_CART",
    payload: cartDetails,
  };
};
