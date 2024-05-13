import { axiosClient } from "./axios";

export const getReports = async () => {
  try {
    const response = await axiosClient.get("/report");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReport = async (id) => {
  try {
    const response = await axiosClient.get(`/report/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateReport = async (id, report) => {
  try {
    const response = await axiosClient.put(`/report/${id}`, report);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReport = async (id) => {
  try {
    const response = await axiosClient.delete(`/report/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
