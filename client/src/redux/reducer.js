import { REGISTERUSER, LOGOUT, LOGIN, GETVERIFY, SEARCH, SOCKET } from "./action";

const initialState = {
  isLogin: false,
  userData: {},
  socket: {}
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
      localStorage.removeItem('userToken');
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

    case SEARCH:
      return {
        ...state
      }
    case SOCKET:
      action.payload.emit('userConnected', { id: state.userData.id, username: state.userData.username })
      return {
        ...state,
        socket: action.payload
      }
    default:
      return { ...state };
  }
}
