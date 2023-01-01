import axios from "axios";
import { ActionTypes } from "../Constants/ActionTypes";
const api = " http://44.211.151.102/api";

// Get User Info API
export const getUserAPI = (token) => {
    return async (dispatch) => {
        axios.get(`${api}/get-profile`, {
            headers: {
                "x-access-token": token,
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(response => {
            let userData  = response.data;
            dispatch(getUser(userData));
        }).catch(error => {
            let errorMsg =  error.message;
            dispatch(getUserError(errorMsg));
        })
    }
}

export const getUser = (userInfo) => {
    return {
        type: ActionTypes.GET_USER_INFO,
        payload: userInfo
    }
};
export const getUserError = (userInfo) => {
    return {
        type: ActionTypes.GET_USER_ERROR,
        payload: userInfo
    }
};


// // Get sent-green-light API
// export const sentGreenLightAPI = (token) => {
//     return async (dispatch) => {
//         axios.get(`${api}/sent-green-light`, {
//             headers: {
//                 "x-access-token": token,
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             }
//         }).then(response => {
//             let userData  = response.data;
//             dispatch(getSentGreenUser(userData));
//         }).catch(error => {
//             let errorMsg =  error.message;
//             dispatch(getSentGreenUserError(errorMsg));
//         })
//     }
// }

// export const getSentGreenUser = (sentUserInfo) => {
//     return {
//         type: ActionTypes.GET_SENT_GREEN_USER_INFO,
//         payload: sentUserInfo
//     }
// };
// export const getSentGreenUserError = (sentUserInfo) => {
//     return {
//         type: ActionTypes.GET_SENT_GREEN_USER_ERROR,
//         payload: sentUserInfo
//     }
// };

// Get Yellow API
export const yellowAPI = (token) => {
    return async (dispatch) => {
        fetch(`${api}/yellow-light`, {
            method: 'GET',
            headers: {
                "x-access-token": token,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
            .then(result => {
                console.log("Yellow working")
                dispatch(getYellowUser(result));
            })
            .catch(error => {
                dispatch(getYellowUserError(error));
            });
        // axios.get(`${api}/yellow-light`, {
        //     headers: {
        //         "x-access-token": token,
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     }
        // }).then(response => {
        //     console.log("yellow Light Working")
        //     let userData  = response.data;
        //     dispatch(getYellowUser(userData));
        // }).catch(error => {
        //     console.log("yellow Light Not Working")
        //     let errorMsg =  error.message;
        //     dispatch(getYellowUserError(errorMsg));
        // })
    }
}

export const getYellowUser = (yellowUserInfo) => {
    return {
        type: ActionTypes.GET_YELLOW_USER_INFO,
        payloadYellow: yellowUserInfo
    }
};
export const getYellowUserError = (yellowUserInfo) => {
    return {
        type: ActionTypes.GET_YELLOW_USER_ERROR,
        payloadYellow: yellowUserInfo
    }
};

// // Get Mutual API
// export const mutualGreenLightAPI = (token) => {
//     return async (dispatch) => {
//         axios.get(`${api}/mutual-green-light`, {
//             headers: {
//                 "x-access-token": token,
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             }
//         }).then(response => {
//             let userData  = response.data;
//             dispatch(getMutualGreenUser(userData));
//         }).catch(error => {
//             let errorMsg =  error.message;
//             dispatch(getMutualGreenUserError(errorMsg));
//         })
//     }
// }

// export const getMutualGreenUser = (mutualUserInfo) => {
//     return {
//         type: ActionTypes.GET_MUTUAL_USER_INFO,
//         payload: mutualUserInfo
//     }
// };
// export const getMutualGreenUserError = (mutualUserInfo) => {
//     return {
//         type: ActionTypes.GET_MUTUAL_USER_ERROR,
//         payload: mutualUserInfo
//     }
// };