import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-be.evenezertadesse.com/api",
  // baseURL: 'http://localhost:8000/api',
});

export default axiosBase;
