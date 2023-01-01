import { ActionTypes } from "../Constants/ActionTypes";

// Get sent-green-light API
// const initialStateSentLight = {
//     sentUserInfo:[]
// }
// export const sentLightReducer = (state = initialStateSentLight, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.GET_SENT_GREEN_USER_INFO :
//             return {sentUserInfo : payload };
//         case ActionTypes.GET_SENT_GREEN_USER_ERROR :
//             return {sentUserInfo : payload };
//         default:
//             return state;
//     }
// }

// Get Yellow API
const initialState = {
    yellowUserInfo:[]
}
export const yellowLightReducer = (state = initialState, actions) => {
    // console.log("payload", payloadYellow, "type", type, "ActionTypes", ActionTypes, "initialState", initialState);
    switch (actions.type) {
        case ActionTypes.GET_YELLOW_USER_INFO : 
            return { ...state, yellowUserInfo : actions.payloadYellow};
        case ActionTypes.GET_YELLOW_USER_ERROR :
             return {yellowUserInfo : actions.payloadYellow, ...state};
        default:
            return state;
    }
}

// Get sent-green-light API
// const initialStateMutualLight = {
//     mutualUserInfo:[]
// }
// export const mutualLightReducer = (state = initialStateMutualLight, {type, payload}) => {
//     switch (type) {
//         case ActionTypes.GET_MUTUAL_USER_INFO :
//             return {mutualUserInfo : payload };
//         case ActionTypes.GET_MUTUAL_USER_ERROR :
//             return {mutualUserInfo : payload };
//         default:
//             return state;
//     }
// }