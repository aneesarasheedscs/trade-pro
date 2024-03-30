import { useState } from 'react';
import { AntTable } from '@/components';
import { filter, uniqBy } from 'lodash';
import { TPurchaseOrderHistory } from '../type';
import SearchCriteriaFrom from './SearchCriteriaForm';
import { detailColumns, mainColumns, mainColumns2 } from './columns';
import { convertVhToPixels } from '@/utils/converVhToPixels';
import { useGetCrystalReports, useGetPurchaseOrder, useGetPurchaseOrderPagination } from '../queries';

function PurchaseOrderTable() {
  const [pageSize, setPageSize] = useState<number | undefined>(10);
  const [currentPage, setCurrentPage] = useState<number | undefined>(1);
  const { data, refetch, isError, isLoading, isFetching } = useGetPurchaseOrder(true, currentPage, pageSize);
  const {
    data: pagData,
    refetch: pagRefetch,
    isError: pagIsError,
    isLoading: pagIsLoading,
    isFetching: pagIsFetching,
  } = useGetPurchaseOrderPagination(true, currentPage, pageSize);
  const { data: reportData, mutate, isSuccess, isPending } = useGetCrystalReports();

  const mainData = data?.data?.Data?.Result || [];
  const pagMainData = pagData?.data?.Data?.Result || [];

  const groupData = uniqBy(data?.data?.Data?.Result, (obj: TPurchaseOrderHistory) => {
    return `${obj?.Id}-${obj?.OrderNo}-${obj?.OrderDate}-${obj?.SupplierName}-${obj?.DeliveryTerm}-${obj?.ApprovedDate}-${obj?.OrderExpiryDate}`;
  });

  return (
    <>
      <h1>Table Pagination + print slip</h1>
      <AntTable
        paginate
        tableId="pagination-example-id" // id must be unique
        pageSize={pageSize}
        currentPage={currentPage}
        totalItems={mainData[0]?.row_count}
        refetch={pagRefetch}
        isError={pagIsError}
        data={pagMainData || []}
        numberOfSkeletons={12}
        columns={mainColumns2()}
        isLoading={pagIsLoading || pagIsFetching}
        searchCriteriaForm={<SearchCriteriaFrom />}
        scroll={{ x: '', y: convertVhToPixels('60vh') }}
        onChange={(pagination) => {
          setPageSize(pagination?.pageSize);
          setCurrentPage(pagination?.current);
        }}
        printSlip={{ data: reportData?.data, enabled: true, onClick: () => mutate(), isSuccess, isPending }}
      />

      <h1>Selectable Row</h1>
      <AntTable
        virtual={false}
        rowKey="Id"
        isRowSelectable
        tableId="selectable-example-id"
        refetch={pagRefetch}
        isError={pagIsError}
        data={groupData || []}
        numberOfSkeletons={12}
        columns={mainColumns()}
        isLoading={pagIsLoading || pagIsFetching}
        searchCriteriaForm={<SearchCriteriaFrom />}
        scroll={{ x: '', y: convertVhToPixels('60vh') }}
        getSelectedRowKeys={(key) => console.log({ keys: key })}
      />

      <h1>Virtual (without pagination)</h1>
      <AntTable
        refetch={refetch}
        isError={isError}
        columns={mainColumns()}
        data={groupData || []}
        numberOfSkeletons={12}
        showTotalRecords={true}
        isLoading={isLoading || isFetching}
        searchCriteriaForm={<SearchCriteriaFrom />}
        scroll={{ x: '', y: convertVhToPixels('60vh') }}
      />

      <h1>Expandable Row</h1>
      <AntTable
        rowKey="Id"
        virtual={false}
        refetch={pagRefetch}
        isError={pagIsError}
        data={groupData || []}
        numberOfSkeletons={12}
        columns={mainColumns()}
        isLoading={pagIsLoading || pagIsFetching}
        searchCriteriaForm={<SearchCriteriaFrom />}
        scroll={{ x: '', y: convertVhToPixels('60vh') }}
        expandable={{
          expandedRowRender: (record) => (
            <AntTable
              isChild
              columns={detailColumns()}
              printData={{ show: false }}
              refreshData={{ show: false }}
              downloadPdf={{ show: false }}
              downloadExcel={{ show: false }}
              columnChooser={{ show: false }}
              groupByColumns={{ show: false }}
              data={filter(data?.data?.Data?.Result, (obj) => record?.Id === obj?.Id)}
            />
          ),
        }}
      />
    </>
  );
}

export default PurchaseOrderTable;
