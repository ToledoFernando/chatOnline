import axios from "axios";
import md5 from "md5";
export const GETUSER = "GETUSER";

const api = import.meta.env.VITE_URLAPI;

export const getUser = (data) => {
  data.password = md5(data.password);
  return async (dispatch) => {
    try {
      const result = await axios.post(`${api}user/register`, data);
      return dispatch({
        type: GETUSER,
        payload: result.data,
      });
    } catch (error) {
      return console.log(error.response.data);
    }
  };
};
