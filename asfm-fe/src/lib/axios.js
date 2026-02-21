import axios from 'axios';

const apiClient = axios.create({
  // This points to real server API
  // baseURL: 'http://localhost:8080/api',

  // This points to mock API
  baseURL: 'http://localhost:3001/api',

  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
