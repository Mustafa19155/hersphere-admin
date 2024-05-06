import { axiosClient } from "./axios";

export const getCategories = async () => {
  try {
    const response = await axiosClient.get("/category");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getCategory = async (id) => {
  try {
    const response = await axiosClient.get(`/category/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createCategory = async (data) => {
  try {
    const response = await axiosClient.post("/category", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateCategory = async (id, data) => {
  try {
    const response = await axiosClient.put(`/category/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteCategory = async (id) => {
  try {
    const response = await axiosClient.delete(`/category/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
