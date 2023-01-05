import { GETUSER } from "./action";

const initialState = {
  isLogin: false,
  userData: {},
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETUSER:
      console.log(action.payload);
      //      localStorage.setItem("usetToken", action.payload.token);
      return {
        ...state,
        isLogin: true,
        //        userData: action.payload.newUser[0],
      };
    default:
      return { ...state };
  }
}
