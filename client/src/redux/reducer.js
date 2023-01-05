import { GETUSER } from "./action";

const initialState = {
  isLogin: false,
  userData: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETUSER:
      localStorage.setItem("userToken", action.payload.token);
      return {
        ...state,
        isLogin: true,
        userData: action.payload.newUser,
      };
    default:
      return { ...state };
  }
}
