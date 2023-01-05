import axios from "axios";
import md5 from "md5";

export const REGISTERUSER = "REGISTERUSER";
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

const api = import.meta.env.VITE_URLAPI;

//===========================USUARIOS=================================//
export const registerUser = (data) => {
  data.password = md5(data.password);
  return async (dispatch) => {
    try {
      const result = await axios.post(`${api}user/register`, data);
      return dispatch({
        type: REGISTERUSER,
        payload: result.data,
      });
    } catch (error) {
      return console.log(error.response.data);
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return dispatch({
      type: LOGOUT
    })
  }
}

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${api}user/login/${data.email}/${md5(data.password)}`)
      return dispatch({
        type: LOGIN,
        payload: result.data
      })
    } catch (error) {
      return console.log(error.response.data);
    }
  }
}