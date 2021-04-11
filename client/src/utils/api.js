import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: '/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
/**
 intercept any error responses from the api.
 ie. 
**/
// localStorage.token;
api.interceptors.request.use(
  (config) => config,
  (error) => {
    Promise.reject(error);
  }
);
api.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
