import { Login } from "../../components/Auth";
import AuthService from "../../services";

export const LOGIN = "LOGIN ";

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((res) => {
      console.log(res);
      dispatch({ type: LOGIN, payload: res });
      history.push("/");
    })
    .catch((err) => {});
};
