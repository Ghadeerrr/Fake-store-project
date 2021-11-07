const initialState = {
  products:[]
  };

  const products = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_PRODUCTS":
      console.log(state.products);
      
        return {
          products: payload,
        };
        
      default:
        return state;
    }
  };
  
  export default products;

  export const setProducts = (products) => {
    console.log(products);
    return {
      type: "SET_PRODUCTS",
      payload: products,
    };
  };

  