import { axiosClient } from "./axios";

export const getPromotions = async () => {
  try {
    const response = await axiosClient.get("/promotions");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPromotion = async (id) => {
  try {
    const response = await axiosClient.get(`/promotions/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getJobs = async () => {
  try {
    const response = await axiosClient.get("/jobs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getJob = async (id) => {
  try {
    const response = await axiosClient.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await axiosClient.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePromotion = async (id) => {
  try {
    const response = await axiosClient.delete(`/promotions/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDashboardData = async () => {
  try {
    const response = await axiosClient.get("/dashboard");
    return response.data;
  } catch (error) {
    throw error;
  }
};
