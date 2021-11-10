const initialState = {
  wishListUsers: [{id:1 ,wishList:[]},{id:2 ,wishList:[]},{id:3 ,wishList:[]}],
};


const wishList = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_WISHLIST":
      console.log(state.wishList);
      return {
        wishListUsers: payload,
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

