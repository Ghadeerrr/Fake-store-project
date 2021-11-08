import { createStore, combineReducers } from "redux";

import products from "./products/products";
import loginDetails from "./Login/login";
import wishList from "./wishList/wishList";

const reducers = combineReducers({products,loginDetails,wishList});
const store = createStore(reducers);

export default store;