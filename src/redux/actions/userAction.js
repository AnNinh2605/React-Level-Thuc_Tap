import { toast } from "react-toastify";
import { loginApi } from "../../service/userService";

export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';

export const USER_LOGOUT = 'USER_LOGOUT';

export const REFRESH = 'REFRESH';

export const handleLoginRedux = (email, password) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });
        // you can use api here
        let results = await loginApi(email.trim(), password);
        if (results && results.token) {
            localStorage.setItem("token", results.token);
            localStorage.setItem("email", email.trim());
            dispatch({
                type: FETCH_USER_SUCCESS,
                data: { email: email.trim(), token: results.token }
            })
            toast.success("Login successful")
        }
        else {
            //error
            if (results && results.status === 400) {
                toast.error(results.data.error);
                dispatch({
                    type: FETCH_USER_ERROR,
                })
            }
        }
    }
}

export const handleLogoutRedux = () => {
    return (dispatch, getState) => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        dispatch({ type: USER_LOGOUT })
        toast.success("Logout successful")
    }
}

export const handleRefresh = () => {
    return (dispatch, getState) => {
        dispatch({ type: REFRESH })
    }
}