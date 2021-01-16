import { Login } from "../../components/Auth";
import AuthService from "../../services";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN, payload: res });
      history.push("/");
    })
    .catch((err) => {});
};

export const register = (params, history) => (dispatch) => {
  return AuthService.register(params)
    .then((res) => {
      console.log(res);
      dispatch({ type: REGISTER, payload: res });
      history.push("/login");
    })
    .catch((err) => {});
};
