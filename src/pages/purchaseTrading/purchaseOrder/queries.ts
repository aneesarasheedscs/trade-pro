import https from '@/configs/https';
import { queryClient } from '@/configs/queryClient';
import { storedUserDetail } from '@/utils/storageService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TPurchaseOrderEntry, TPurchaseOrderSearchCriteria } from './type';

const userDetail = storedUserDetail();

export const useGetCrystalReports = () => {
  return useMutation({
    mutationKey: ['crystal-report'],
    mutationFn: () => {
      return https.post(
        '/api/inventoryHistoryReports/RptPurchaseOrderRegisterRice_206',
        {
          DocumentTypeId: 41,
          CompanyId: 2,
          OrganizationId: 2,
          FromDate: '2023-07-01',
          ToDate: '2024-03-26',
          ApprovedFilter: 'All',
          ReportName: '206-RptPurchaseOrderRegisterRice',
          CompanyAddress: 'Lahore',
          UserName: 'Amir Hussain',
          CompanyName: 'Eccount Book ERP',
        },
        { responseType: 'blob' }
      );
    },
  });
};

//? Virtual Query

export const useGetPurchaseOrder = (
  enabled = true,
  currentPage?: number | null,
  pageSize?: number | null,
  params?: TPurchaseOrderSearchCriteria
) => {
  return useQuery({
    enabled,
    queryKey: ['purchase-order', pageSize, currentPage],
    queryFn: () => {
      return https.post('/api/InventoryReports/PurchaseOrderHistory', {
        DocumentTypeId: 41,
        CompanyId: userDetail?.CompanyId,
        OrganizationId: userDetail?.OrganizationId,
        // PageNumber: currentPage,
        // PageSize: pageSize,
        ...params,
      });
    },
  });
};

// Paginated Data Purchase Order
export const useGetPurchaseOrderPagination = (
  enabled = true,
  currentPage?: number | null,
  pageSize?: number | null,
  params?: TPurchaseOrderSearchCriteria
) => {
  return useQuery({
    enabled,
    queryKey: ['purchase-order', pageSize, currentPage],
    queryFn: () => {
      return https.post('/api/InventoryReports/PurchaseOrderHistory', {
        DocumentTypeId: 41,
        CompanyId: userDetail?.CompanyId,
        OrganizationId: userDetail?.OrganizationId,
        PageNumber: currentPage,
        PageSize: pageSize,
        ...params,
      });
    },
  });
};

export const useAddPurchaseOrder = () => {
  return useMutation({
    mutationKey: ['add-purchase-order'],
    mutationFn: (data: TPurchaseOrderEntry) => https.post('/api/PurchaseOrder/Save', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['purchase-order'] });
    },
  });
};

const [CompanyId, OrganizationId] = [userDetail?.CompanyId, userDetail?.OrganizationId];

const params = { CompanyId, OrganizationId };

export const useGetSuppliers = () => {
  return useQuery({
    queryKey: ['suppliers'],
    queryFn: () => {
      return https.get('/api/SupplierCustomer/SupplierCustomerAgainstPurchaseOrder', { params });
    },
  });
};

export const useGetItems = () => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => https.get('/api/Item/ItemsAgainstPurchaseOrder', { params }),
  });
};

export const useGetOrderStatus = () => {
  return useQuery({
    queryKey: ['order-status'],
    queryFn: () => https.get('/api/CommonServices/OrderStatus', { params }),
  });
};

export const useGetApprovedStatus = () => {
  return useQuery({
    queryKey: ['approved-status'],
    queryFn: () => https.get('/api/CommonServices/ApprovedStatus', { params }),
  });
};
