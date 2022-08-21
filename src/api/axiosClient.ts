import axios from 'axios';
import { config } from '../configs/variable';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: config.API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: config.API_KEY }),
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
