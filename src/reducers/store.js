import { createStore, combineReducers } from "redux";

import products from "./products/products";
import loginDetails from "./Login/login";
const reducers = combineReducers({products,loginDetails});
const store = createStore(reducers);

export default store;