import {combineReducers} from "redux";
import {yellowLightReducer} from "./LightReducer";
import { userReducer } from "./UserReducer";

const reactReducers = combineReducers({
    userReducer: userReducer,
    // sentLightReducer: sentLightReducer,
    yellowLightReducer: yellowLightReducer,
    // mutualLightReducer: mutualLightReducer,
})

export default reactReducers;