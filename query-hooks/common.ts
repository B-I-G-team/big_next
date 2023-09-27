import * as api from '@/api/common';
import { useQuery } from 'react-query';

export const useUserInfoQuery = () => {
  return useQuery({
    queryKey: ['user-info'],
    queryFn: () => api.getUserInfo(),
    retry: false,
  });
};
