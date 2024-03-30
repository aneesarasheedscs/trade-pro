import { size } from 'lodash';
import { ReactNode } from 'react';
import { AppLayout } from '@/components';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '@/utils/isTokenExpired';
import { storedFinancialYear, storedUserDetail } from '@/utils/storageService';

function ProtectedRoute({ element }: { element: ReactNode }) {
  const userDetail = storedUserDetail();
  const financialYearDetail = storedFinancialYear();

  if (userDetail?.access_token && !isTokenExpired() && size(financialYearDetail) > 0) {
    return <AppLayout>{element}</AppLayout>;
  }

  return <Navigate to="/" />;
}

export default ProtectedRoute;
