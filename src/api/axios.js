import axios from "axios";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.REACT_APP_BASE_URL + "/api/admin";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  common: {},
};

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const user = localStorage.getItem("user");
      const token = JSON.parse(user).token;
      axiosClient.defaults.headers = { Authorization: `${token}` };
    } catch (err) {}
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.response.use(
//   function (response) {
//     //Dispatch any action on success
//     return response;
//   },

//   function (error) {
//     if (error.response.status === 401) {
//       if (error.response.config.url != '/user/login') {
//         window.location.href = '/user';
//       }
//     }
//     return Promise.reject(error);
//   },
// );
