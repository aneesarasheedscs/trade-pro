import { lazy } from 'react';
import { route } from './constants';
import ProtectedRoute from './ProtectedRoute';
import { RouteObject, useRoutes } from 'react-router-dom';

const Login = lazy(() => import('@/pages/login'));
const PurchaseOrder = lazy(() => import('@/pages/purchaseTrading/purchaseOrder'));
const CompanyBranchDetail = lazy(() => import('@/pages/login/CompanyBranchDetails'));

function Routes() {
  const routes: RouteObject[] = [
    {
      path: route.PURCHASE_ORDER,
      element: <ProtectedRoute element={<PurchaseOrder />} />,
    },
    {
      path: route.LOGIN,
      element: <Login />,
    },
    {
      path: route.COMPANY_BRANCH_DETAIL,
      element: <CompanyBranchDetail />,
    },
  ];

  const router = useRoutes(routes);
  return router;
}

export default Routes;
