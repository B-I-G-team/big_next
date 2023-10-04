import axios from 'axios';

export const HOST = 'http://rasp.jaejun.me:14080';
// export const HOST = 'http://localhost:14080';

export const axiosWithToken = axios.create({
  baseURL: `${HOST}`,
});

axiosWithToken.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = localStorage.getItem('access_token');

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers)
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  },
);
