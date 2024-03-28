import { axiosClient } from "./axios";

export const getUsers = async () => {
  try {
    const response = await axiosClient.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axiosClient.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const blockUser = async (id) => {
  try {
    const response = await axiosClient.put(`/users/${id}/block`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const unblockUser = async (id) => {
  try {
    const response = await axiosClient.put(`/users/${id}/unblock`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUsersWithHighestSuccessScore = async () => {
  try {
    const response = await axiosClient.get("/users/all/success-score");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
