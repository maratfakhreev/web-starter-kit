import axios from 'axios';
import config from 'config';

const http = axios.create({ baseURL: config.apiPath });

http.interceptors.request.use(
  config => {
    if (config.withoutAuth) return config;

    return {
      ...config,
      headers: {
        ...config.headers,
        // Some auth headers
        // 'X-User-Email': currentUser.email,
        // 'X-User-Token': currentUser.token
      },
    };
  },
  error => Promise.reject(error)
);

http.interceptors.response.use(response => response, error => Promise.reject(error));

export default http;
