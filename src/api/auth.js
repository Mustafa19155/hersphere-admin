import { axiosClient } from "./axios";
export const login = async (email, password) => {
  try {
    const response = await axiosClient.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosClient.post("/logout");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkLogin = async () => {
  try {
    const response = await axiosClient.get("/check-login");
    return response.data;
  } catch (error) {
    throw error;
  }
};
