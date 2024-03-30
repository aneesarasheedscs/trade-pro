import https from '@/configs/https';
import { useQuery } from '@tanstack/react-query';

export const useGetMenu = () => {
  const userDetail = JSON.parse(localStorage.getItem('loggedInUserDetail') || '{}');

  return useQuery({
    queryKey: ['sidebar-menu'],
    gcTime: userDetail?.expires_in,
    queryFn: () => {
      return https.get('/api/UserRights/GetUserRightsForViewbyUserId', {
        params: { EntryUser: userDetail?.UserId, CompanyId: userDetail?.CompanyId },
      });
    },
  });
};
