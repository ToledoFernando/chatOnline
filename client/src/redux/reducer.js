import { REGISTERUSER, LOGOUT, LOGIN, GETVERIFY } from "./action";

const initialState = {
  isLogin: false,
  userData: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTERUSER:
      localStorage.setItem("userToken", action.payload.token);
      return {
        ...state,
        isLogin: true,
        userData: action.payload.newUser,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isLogin: false,
        userData: {},
      };

    case LOGIN:
      localStorage.setItem("userToken", action.payload.token);
      return {
        ...state,
        isLogin: true,
        userData: action.payload.User,
      };

    case GETVERIFY:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
