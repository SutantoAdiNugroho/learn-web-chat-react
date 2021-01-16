import { LOGIN, REGISTER } from "../actions/auth";

const InitialState = {
  user: {},
  token: "",
  isLoggedIn: false,
};

const authReducers = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isLoggedIn: true,
      };
      break;

    case REGISTER:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isLoggedIn: true,
      };
      break;

    default:
      return state;
      break;
  }
};

export default authReducers;
