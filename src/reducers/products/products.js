const initialState = {
  products:[],
  filter:[]
  };

  const products = (state = initialState, { type, payload }) => {
    switch (type) {
      case "SET_PRODUCTS":
      console.log(state.products);
      
        return {
          products: payload,
          filter: state.filter
        };
        case "SET_FILTER":
      console.log(state.filter);
      
        return {
          products: state.products,
          filter: payload
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

  export const setFilter = (Fproducts) => {
    
    console.log(Fproducts);
    return {
      type: "SET_FILTER",
      payload: Fproducts,
    };
  };

  