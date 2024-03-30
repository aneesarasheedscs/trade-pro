import { TFinancialYear, TUserDetail } from '@/types/global';
import { isNil } from 'lodash';

export const storedUserDetail = (): TUserDetail | null => {
  const storedData = localStorage.getItem('loggedInUserDetail'); // Replace 'yourLocalStorageKey' with the actual key you used

  if (!isNil(storedData)) {
    const userDetail: TUserDetail = JSON.parse(storedData);
    return userDetail;
  }

  return null;
};

export const storedFinancialYear = (): TFinancialYear | null => {
  const storedData = localStorage.getItem('financialYear'); // Replace 'yourLocalStorageKey' with the actual key you used

  if (!isNil(storedData)) {
    const financialYearDetail: TFinancialYear = JSON.parse(storedData);
    return financialYearDetail;
  }

  return null;
};
