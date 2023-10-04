import { axiosWithToken, HOST } from './config';

export const getUserInfo = async () => {
  const res = await axiosWithToken.get(`${HOST}/user-info`);
  return res.data;
};
