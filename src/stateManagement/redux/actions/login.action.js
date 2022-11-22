import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  const body = JSON.stringify({ username, password });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post("/backend/auth/login", body, config);

    const { token, user } = response.data;
    console.log("token del usuario: ", token);

    dispatch({ type: "LOG_IN", payload: { token, user } });
    localStorage.setItem("Instituto-Politecnico", token);
    axios.defaults.headers.common["token"] = token;
  } catch (error) {
    const { type, message } = error.response.data;
    dispatch({ type: "LOG_IN_ERROR", payload: { type, message } });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("Instituto-Politecnico");
  dispatch({ type: "LOG_OUT" });
  delete axios.defaults.headers.common["token"];
};
