import { ActionTypes } from "../Constants/ActionTypes";
const initialState = {
    userInfo:[]
}
export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.GET_USER_INFO :
            return {userInfo : payload };
        case ActionTypes.GET_USER_ERROR :
            return {userInfo : payload };
        default:
            return state;
    }
}