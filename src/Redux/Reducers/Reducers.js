import {combineReducers} from "redux";
import { userReducer } from "./UserReducer";

const reactReducers = combineReducers({
    userReducer: userReducer
})

export default reactReducers;