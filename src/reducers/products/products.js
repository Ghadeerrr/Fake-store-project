const initialState = {
    Allproducts:[]
  };

  const products = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_PRODUCTS":
      console.log(state.Allproducts);
      
        return {
            Allproducts: payload,
        };
        
      default:
        return state;
    }
  };
  
  export default products;

  export const setProducts = (products) => {
    return {
      type: "SET_PRODUCTS",
      payload: products,
    };
  };

  