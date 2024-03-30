import { TUser } from './types';
import { notification } from 'antd';
import https from '@/configs/https';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { storedUserDetail } from '@/utils/storageService';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationKey: ['token'],
    mutationFn: (data: TUser) => getAccessToken(data),
    onSuccess: (response: AxiosResponse) => {
      const userData = JSON.stringify(response?.data);
      localStorage.setItem('loggedInUserDetail', userData);
    },
    onError: (error: AxiosError<{ error_description: string }>) => {
      notification.error({ message: error?.response?.data?.error_description });
    },
  });
};

const apiURL = import.meta.env.VITE_API_URL;

const getAccessToken = (values: TUser) => {
  const { username, password } = values;
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  const data = new URLSearchParams();
  data.append('username', username);
  data.append('password', password);
  data.append('grant_type', 'password');

  return axios.post(`${apiURL}/token`, data, { headers });
};

const userDetail = storedUserDetail();

export const useGetCompany = () => {
  return useQuery({
    queryKey: ['company'],
    queryFn: () => {
      return https.get('/api/UserAccountAllocation/GetAllCompaniesByUserId', {
        params: { OrganizationId: userDetail?.OrganizationId, UserAccountId: userDetail?.UserId },
      });
    },
  });
};

export const useGetFinancialYear = (CompanyId: number | null) => () => {
  return useQuery({
    enabled: !!CompanyId,
    queryKey: ['financial-year', CompanyId],
    queryFn: () => {
      return https.get('/api/FinancialYear/GetFinancialYearlist', {
        params: { CompanyId, OrganizationId: userDetail?.OrganizationId },
      });
    },
  });
};

export const useGetBranch = (CompanyId: number | null) => () => {
  return useQuery({
    enabled: !!CompanyId,
    queryKey: ['branch', CompanyId],
    queryFn: () => {
      return https.get('/api/UserAccountAllocation/GetBranchesByUserId', {
        params: { CompanyId, UserAccountId: userDetail?.UserId },
      });
    },
  });
};
