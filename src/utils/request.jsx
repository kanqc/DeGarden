import axios from "axios";

const request = axios.create({
  baseURL: "https://6363d3717b209ece0f38b47a.mockapi.io",
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
export default request;
