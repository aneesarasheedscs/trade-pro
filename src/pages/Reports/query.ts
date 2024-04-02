import https from '@/configs/https';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { TAddtoFavoriteScreens } from './types';
import { storedUserDetail } from '@/utils/storageService';
import { queryClient } from '@/configs/queryClient';
import { notification } from 'antd';

const userDetail = storedUserDetail();

export const useGetMenu = () => {
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

export const useGetFavouiteScreens = () => {
  return useQuery({
    queryKey: ['favorite-screens'],
    gcTime: userDetail?.expires_in,
    queryFn: () => {
      return https.get('/api/FavoriteScreens/ReadByUserId', {
        params: {
          OrganizationId: userDetail?.OrganizationId,
          UserId: userDetail?.UserId,
          CompanyId: userDetail?.CompanyId,
        },
      });
    },
  });
};
export const useGetDeleteFavouiteScreens = (enabled = false, ScreenName?: string) => {
  return useQuery({
    queryKey: ['delete-favorite-screens', ScreenName],
    enabled: !!ScreenName,
    gcTime: userDetail?.expires_in,
    queryFn: () => {
      return https.get('/api/FavoriteScreens/DeleteByScreenNameAndUserId', {
        params: { ScreenName: ScreenName, UserId: userDetail?.UserId },
      });
    },
  });
};

export const useAddFavoriteScreens = () => {
  let dataToSubmit = {};
  return useMutation({
    mutationKey: ['add-favorite-screens'],
    mutationFn: (data: TAddtoFavoriteScreens) => https.post('/api/FavoriteScreens/Save', data, { ...dataToSubmit }),
    onSuccess: (response: AxiosResponse) => {
      queryClient.invalidateQueries({ queryKey: ['favorite-screens'] });
      if (response?.data && response?.data?.Status === false) {
        notification.error({
          message: 'Error',
          description: response?.data?.Message || 'An error occurred.',
        });
      } else if (response?.data && response?.data?.Status === true) {
        const msg = 'Report added to Favorites Successfully!';
        notification.success({ description: '', message: msg });
      }
    },
    onError: (error: AxiosError) => {
      const msg = error.response?.data || 'Something went wrong';
      notification.error({ description: '', message: msg as string });
    },
  });
};
