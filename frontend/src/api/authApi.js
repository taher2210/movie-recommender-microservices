import axios from "axios";

const AUTH_URL = "http://127.0.0.1:8000";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${AUTH_URL}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (err) {
    console.log("LOGIN ERROR:", err.response?.data);
    throw err;
  }
};