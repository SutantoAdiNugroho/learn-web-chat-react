import API from "./api";

const AuthService = {
  login: (data) => {
    return API.post("/auth/login", data)
      .then(({ data }) => {
        API.defaults.headers["Authorization"] = `Bearer ${data.token}`;
        return data;
      })
      .catch((err) => {
        console.log("Error", err);
        throw err;
      });
  },
  register: (data) => {},
  logout: (data) => {},
};

export default AuthService;
