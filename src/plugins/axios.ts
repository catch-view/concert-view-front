import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 2000,
});
