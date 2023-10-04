import * as api from '@/api/common';
import { UserInfo } from '@/types/common';
import { useQuery } from 'react-query';

export const useUserInfoQuery = () => {
  return useQuery<UserInfo>({
    queryKey: ['user-info'],
    queryFn: () => api.getUserInfo(),
    retry: false,
  });
};
