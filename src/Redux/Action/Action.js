import axios from "axios";
import { ActionTypes } from "../Constants/ActionTypes";
const api = " http://44.211.151.102/api";
const  getlocalStorage = JSON.parse(localStorage.getItem("user-info"));
const getToken = getlocalStorage?.token;

// Get User Info API
export const getUserAPI = () => {
    return async (dispatch) => {
        axios.get(`${api}/get-profile`, {
            headers: {
                "x-access-token": getToken,
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        }).then(response => {
            const userData  = response.data;
            dispatch(getUser(userData));
        }).catch(error => {
            const errorMsg =  error.message;
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