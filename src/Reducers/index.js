import { createStore, combineReducers } from "redux";
import productReducer from "./productReducers";
import CartReducer from "./CartReducer";
import SearchReducer from "./SearchReducer";

const rootReducer = combineReducers({
    productReducer, CartReducer, SearchReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;