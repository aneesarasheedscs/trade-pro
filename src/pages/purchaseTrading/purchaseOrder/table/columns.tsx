import dayjs from 'dayjs';
import { Tooltip } from 'antd';
import { AntButton } from '@/components';
import { AntColumnType } from '@/types/global';
import { TPurchaseOrderHistory } from '../type';
import { formateDate } from '@/utils/formateDate';
import { FileTextOutlined } from '@ant-design/icons';
import { numberFormatter } from '@/utils/numberFormatter';

export const mainColumns = (): AntColumnType<TPurchaseOrderHistory>[] => [
  { title: 'Order No.', key: 'OrderNo', dataIndex: 'OrderNo', width: 100, fixed: 'left' },
  {
    width: 150,
    title: 'Order Date',
    searchableDate: true,
    key: 'OrderDate',
    dataIndex: 'OrderDate',
    sortDirections: ['ascend', 'descend'],
    render: (_, { OrderDate }) => formateDate(OrderDate),
    sorter: (a, b) => {
      const dateA = dayjs(a.OrderDate);
      const dateB = dayjs(b.OrderDate);
      return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
    },
  },
  {
    width: 300,
    searchableInput: true,
    title: 'Supplier Name',
    key: 'SupplierName',
    dataIndex: 'SupplierName',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => a?.SupplierName?.localeCompare(b?.SupplierName),
  },
  { title: 'Delivery Term', key: 'DeliveryTerm', dataIndex: 'DeliveryTerm', width: 150 },
  { title: 'Item Name', key: 'ItemName', dataIndex: 'ItemName', width: 350 },
  { title: 'Base UOM', key: 'BaseUom', dataIndex: 'BaseUom', width: 120 },
  {
    width: 120,
    title: 'Order Qty',
    key: 'OrderQty',
    dataIndex: 'OrderQty',
    render: (_, { OrderQty }) => numberFormatter(OrderQty),
  },
  {
    width: 120,
    title: 'Received Qty',
    key: 'ReceivedQty',
    dataIndex: 'ReceivedQty',
    render: (_, { ReceivedQty }) => numberFormatter(ReceivedQty),
  },
  {
    width: 120,
    title: 'Balance Qty',
    key: 'BalanceQty',
    dataIndex: 'BalanceQty',
    render: (_, { BalanceQty }) => numberFormatter(BalanceQty),
  },
  {
    width: 150,
    isNumber: true,
    showTotal: true,
    searchableInput: true,
    title: 'Order Weight',
    key: 'OrderWeight',
    dataIndex: 'OrderWeight',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => a.OrderWeight - b.OrderWeight,
  },
  {
    width: 130,
    showTotal: true,
    // align: 'right',
    title: 'Received Weight',
    key: 'ReceivedWeight',
    dataIndex: 'ReceivedWeight',
    render: (_, { ReceivedWeight }) => numberFormatter(ReceivedWeight),
  },
  {
    width: 100,
    showAverage: true,
    title: 'Bal Weight',
    key: 'BalWeight',
    dataIndex: 'BalWeight',
    render: (_, { BalWeight }) => numberFormatter(BalWeight),
  },
  {
    width: 150,
    isNumber: true,
    title: 'Item Rate',
    key: 'ItemRate',
    dataIndex: 'ItemRate',
    searchableInput: true,
  },
  {
    width: 120,
    title: 'Approved Date',
    key: 'ApprovedDate',
    dataIndex: 'ApprovedDate',
    render: (_, { ApprovedDate }) => formateDate(ApprovedDate),
  },
  {
    width: 150,
    title: 'Order Expiry Date',
    key: 'OrderExpiryDate',
    dataIndex: 'OrderExpiryDate',
    render: (_, { OrderExpiryDate }) => formateDate(OrderExpiryDate),
  },
];

export const mainColumns2 = (): AntColumnType<TPurchaseOrderHistory>[] => [
  { title: 'Order No.', key: 'OrderNo', dataIndex: 'OrderNo', width: 100, fixed: 'left' },
  {
    width: 150,
    title: 'Order Date',
    searchableDate: true,
    key: 'OrderDate',
    dataIndex: 'OrderDate',
    sortDirections: ['ascend', 'descend'],
    render: (_, { OrderDate }) => formateDate(OrderDate),
    sorter: (a, b) => {
      const dateA = dayjs(a.OrderDate);
      const dateB = dayjs(b.OrderDate);
      return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
    },
  },
  {
    width: 300,
    searchableInput: true,
    title: 'Supplier Name',
    key: 'SupplierName',
    dataIndex: 'SupplierName',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => a?.SupplierName?.localeCompare(b?.SupplierName),
  },
  { title: 'Delivery Term', key: 'DeliveryTerm', dataIndex: 'DeliveryTerm', width: 150 },
  { title: 'Item Name', key: 'ItemName', dataIndex: 'ItemName', width: 350 },
  { title: 'Base UOM', key: 'BaseUom', dataIndex: 'BaseUom', width: 120 },
  {
    width: 120,
    title: 'Order Qty',
    key: 'OrderQty',
    dataIndex: 'OrderQty',
    render: (_, { OrderQty }) => numberFormatter(OrderQty),
  },
  {
    width: 120,
    title: 'Received Qty',
    key: 'ReceivedQty',
    dataIndex: 'ReceivedQty',
    render: (_, { ReceivedQty }) => numberFormatter(ReceivedQty),
  },
  {
    width: 120,
    title: 'Balance Qty',
    key: 'BalanceQty',
    dataIndex: 'BalanceQty',
    render: (_, { BalanceQty }) => numberFormatter(BalanceQty),
  },
  {
    width: 150,
    isNumber: true,
    showTotal: true,
    searchableInput: true,
    title: 'Order Weight',
    key: 'OrderWeight',
    align: 'right',
    dataIndex: 'OrderWeight',
    sortDirections: ['ascend', 'descend'],
    sorter: (a, b) => a.OrderWeight - b.OrderWeight,
  },
  {
    width: 130,
    showTotal: true,
    align: 'right',
    title: 'Received Weight',
    key: 'ReceivedWeight',
    dataIndex: 'ReceivedWeight',
    render: (_, { ReceivedWeight }) => numberFormatter(ReceivedWeight),
  },
  {
    width: 100,
    showAverage: true,
    title: 'Bal Weight',
    key: 'BalWeight',
    dataIndex: 'BalWeight',
    render: (_, { BalWeight }) => numberFormatter(BalWeight),
  },
  {
    width: 150,
    isNumber: true,
    title: 'Item Rate',
    key: 'ItemRate',
    dataIndex: 'ItemRate',
    searchableInput: true,
  },
  {
    width: 120,
    title: 'Approved Date',
    key: 'ApprovedDate',
    dataIndex: 'ApprovedDate',
    render: (_, { ApprovedDate }) => formateDate(ApprovedDate),
  },
  {
    width: 150,
    title: 'Order Expiry Date',
    key: 'OrderExpiryDate',
    dataIndex: 'OrderExpiryDate',
    render: (_, { OrderExpiryDate }) => formateDate(OrderExpiryDate),
  },

  {
    width: 60,
    title: 'Action',
    key: 'action',
    fixed: 'right',
    dataIndex: 'action',
    render: (_, { Id }) => (
      <Tooltip arrow title="Download Slip">
        <AntButton
          ghost
          size="small"
          icon={<FileTextOutlined />}
          onClick={() => alert(`Use record Id ${Id} to print slip`)}
        />
      </Tooltip>
    ),
  },
];

export const detailColumns = (): AntColumnType<TPurchaseOrderHistory>[] => [
  { title: 'Item Name', key: 'ItemName', dataIndex: 'ItemName', width: 20 },
  { title: 'Job Lot', key: 'JobLot', dataIndex: 'JobLot', width: 20 },
  { title: 'Base UOM', key: 'BaseUom', dataIndex: 'BaseUom', width: 20 },
  { title: 'Weight', key: 'OrderWeight', dataIndex: 'OrderWeight', width: 20, showTotal: true },
  { title: 'Item Rate', key: 'ItemRate', dataIndex: 'ItemRate', width: 20 },
  { title: 'Rate UOM', key: 'RateUom', dataIndex: 'RateUom', width: 20 },
  { title: 'Amount', key: 'OrderAmount', dataIndex: 'OrderAmount', width: 20, showTotal: true },
];
