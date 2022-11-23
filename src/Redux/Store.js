import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reactReducers from "./Reducers/Reducers";

const Store = createStore(reactReducers, applyMiddleware(thunk));

export default Store;