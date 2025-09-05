import axios from "axios";

const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 404:
          error.message = "Resource not found";
          break;
        case 500:
          error.message = "Internal server error";
          break;
        case 503:
          error.message = "Service unavailable";
          break;
        default:
          error.message = data?.message || "Something went wrong";
      }
    } else if (error.request) {
      error.message = "Network error";
    }

    return Promise.reject(error);
  }
);

export const campersAPI = {
  fetchCampers: async (filters = {}, page = 1, limit = 4) => {
    try {
      const params = {
        page: page.toString(),
        limit: limit.toString(),
        ...filters,
      };

      const response = await apiClient.get("/campers", { params });

      let data = response.data;
      if (!Array.isArray(data)) {
        data = data.items || [];
      }

      return { data, page, limit };
    } catch (error) {
      if (error.response?.status === 404) {
        return { data: [], page, limit };
      }
      throw error;
    }
  },

  fetchCamperById: async (id) => {
    try {
      const response = await apiClient.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error(`Camper with ID ${id} not found`);
      }
      throw error;
    }
  },

};

export { apiClient };

export default campersAPI;
