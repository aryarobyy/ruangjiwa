import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
    //   sesuain aja timeoutny
  // timeout: 10000,
});

export default axiosInstance;