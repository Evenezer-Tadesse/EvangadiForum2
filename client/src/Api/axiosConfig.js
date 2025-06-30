import axios from 'axios';

const axiosBase = axios.create({
    baseURL: 'https://evangadiforumbe.onrender.com/api',
  // baseURL: 'http://localhost:8000/api',
});

export default axiosBase;
