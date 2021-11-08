const initialState = {
  wishList: [],
};

const wishList = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_WISHLIST":
      console.log(state.wishList);

      return {
        wishList: payload,
      };

    default:
      return state;
  }
};

export default wishList;

export const setWishList = (wishList) => {
  console.log(wishList);
  return {
    type: "SET_WISHLIST",
    payload: wishList,
  };
};
