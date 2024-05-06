export const getReports = async () => {
  try {
    const response = await axios.get("/api/report");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReport = async (id) => {
  try {
    const response = await axios.get(`/api/report/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateReport = async (id, report) => {
  try {
    const response = await axios.put(`/api/report/${id}`, report);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReport = async (id) => {
  try {
    const response = await axios.delete(`/api/report/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
