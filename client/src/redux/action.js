import axios from "axios";
import md5 from "md5";
import { io } from "socket.io-client";

export const REGISTERUSER = "REGISTERUSER";
export const GETVERIFY = "GETVERIFY";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
export const SEARCH = "SEARCH";
export const SOCKET = 'SOCKET';

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
      type: LOGOUT,
    });
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        `${api}user/login/${data.email}/${md5(data.password)}`
      );
      return dispatch({
        type: LOGIN,
        payload: result.data,
      });
    } catch (error) {
      return console.log(error.response.data);
    }
  };
};

export const getVerifyAcoutn = (data, token) => {
  return async (dispatch) => {
    try {
      const xd = await axios.put(`${api}user/verify`, data, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(xd.data);
      return dispatch({
        type: GETVERIFY,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const searchUsers = (data, token) => {
  return async (dispatch) => {

    const result = await axios.get(`${api}user/search/${data}`, {
      headers: { authorization: `Bearer ${token}` },
    })
    console.log(result.data);
    return dispatch({
      type: SEARCH
    })
  }
}

//==========================================================================//

export const connectSocket = () => {
  return async (dispatch) => {
    const socket = await io(api);
    return dispatch({
      type: SOCKET,
      payload: socket
    })
  }
}