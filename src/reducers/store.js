import { createStore, combineReducers } from "redux";

import products from "./products/products";
import loginDetails from "./Login/login";
import wishList from "./wishList/wishList";
import Cart from "./cart/cart";

const reducers = combineReducers({products,loginDetails,wishList,Cart});
const store = createStore(reducers);

export default store;