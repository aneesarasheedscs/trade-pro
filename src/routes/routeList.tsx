import { lazy } from 'react';
import { route } from './constants';
import { RouteObject } from 'react-router-dom';

const open = false;
const openItemType = false;
const openItemSchudleUnit = false;
const LoginPage = lazy(() => import('@/pages/login'));
const CompanyBranchDetails = lazy(() => import('@/pages/login/CompanyBranchDetails'));
const AllReports = lazy(() => import('@/pages/Reports'));
const PurchaseOrder = lazy(() => import('@/pages/purchaseTrading/purchaseOrder'));
const AppMenu = lazy(() => import('@/pages/MainMenu'));

export const protectedRoutes: RouteObject[] = [
  { path: route.APP_MENU, element: <AppMenu /> },
  //Dashboards
  // { path: route.ACCOUNTS_DASHBOARD, element: <AccountDashboard /> },
  // { path: route.APPROVAL_DASHBOARD, element: <Approval_dashboard /> },
  // { path: route.MONTH_QUARTER_WISE_SALE_REPORT, element: <MonthandQuarterWiseSaleReport /> },
  // { path: route.SALES_COMPARISON, element: <SalesComparison /> },
  // { path: route.SALE_ANALYTICS, element: <SaleAnalytics /> },
  // { path: route.MONTHLY_DATE_REPORT, element: <MonthlySaleReport /> },

  //Account Definitions
  // { path: route.CHART_ACCOUNT, element: <ChartOfAccount /> },
  // { path: route.CHEQUE_BOOK_REGISTRATION, element: <ChequeBookForm /> },
  // { path: route.ACCOUNT_ALLOCATION, element: <AccountAllocation /> },
  // { path: route.OPENING_BALANCE, element: <OpeningBalance /> },

  //Account Tranaction
  // { path: route.CONTRA_VOUCHER, element: <ContraVoucher /> },
  // { path: route.EXPENSE_VOUCHER, element: <ExpenseVoucher /> },
  // { path: route.BANK_RECEIPT_VOUCHER, element: <BankReceiptVoucher /> },
  // { path: route.RECEIPTS_VOUCHER, element: <ReceiptsVoucher /> },
  // { path: route.BANK_PAYMENT_VOUCHER, element: <BankPaymentVoucher /> },
  // { path: route.CASH_PAYMENT_VOUCHER, element: <CashPaymentVoucher /> },
  // { path: route.PAYMENT_VOUCHER, element: <PaymentVoucher /> },
  // { path: route.CASH_RECEIPT_VOUCHER, element: <CashReceiptVoucher /> },
  // { path: route.JOURNAL_VOUCHER, element: <JournalVoucher /> },
  // { path: route.BILLS_PAYABLE_ACCOUNTS, element: <BillsPayableAccounts /> },
  // { path: route.BILLS_RECEIVABLES_ACCOUNTS, element: <BillsReceivableAccounts /> },

  //Account Reports
  // { path: route.ACTIVITY_SUMMARY, element: <ActivitySummary /> },
  // { path: route.CASH_BALANCES, element: <CashBalances /> },
  // { path: route.BANK_BALANCES, element: <BankBalances /> },
  // { path: route.TRADE_DEBITORS_REPORT, element: <PayablesReceivablesReport AccountClassId={2} /> },
  // { path: route.TRADE_CREDITORS_REPORT, element: <PayablesReceivablesReport AccountClassId={3} /> },
  // { path: route.TRIAL_BALANCE, element: <TrialBalance /> },
  // { path: route.BALANCE_SHEET, element: <BalanceSheet /> },
  // { path: route.VOUCHER_REPORT, element: <VoucherReport /> },
  // { path: route.ACCOUNT_PAYABLES, element: <AccountPayables /> }, // By Due Date
  // { path: route.ACCOUNT_RECEIVABLES, element: <AccountReceivables /> }, // By Due Date
  // { path: route.SELECTED_TRIAL_BALANCE, element: <SelectedTrialBalance /> },
  // { path: route.TRIAL_BALANCE_ALL_LEVEL, element: <TrialBalanceAllLevelReport /> },
  // { path: route.PROFIT_LOSS, element: <ProfitLossReport /> },
  // { path: route.PL_NOTES_BREAKUP, element: <PLNotesBreakup /> },
  // { path: route.BS_NOTES_BREAKUP, element: <BSNotesBreakup /> },
  // { path: route.CHART_OF_ACCOUNT_TITLE_UPDATE, element: <ChartOfAccountReportTable /> },
  // { path: route.GENERAL_LEDGER, element: <GeneralLedgerReport /> },
  // { path: route.PAYABLES, element: <PayablesTable /> },
  // { path: route.PAYABLES_AGING_REPORT, element: <PayableAgingRegisterTable /> },
  // { path: route.RECEIVABLES, element: <ReceivableReport /> },
  // { path: route.RECEIVABLES_AGING_REPORT, element: <ReceivablesAgingRegisterTable /> },

  //Stock Reports
  // { path: route.STOCK_REPORT_SIMPLE, element: <StockReportSimple /> },
  // { path: route.STOCK_REPORT_WITH_VALUE, element: <StockReportswithValues /> },
  // { path: route.INVENTRY_TRANSACTION, element: <InventryTransactions /> },
  // { path: route.INVENTORY_EVALUATION_LEDGER, element: <InventoryEvaluationItemLedger /> },

  // Inventory Definintion
  // { path: route.ITEM_ALLOCATION_FORM, element: <ItemAllocationForm /> },
  // { path: route.DEFINE_ITEM_HISTORY, element: <PosDefineItem /> },
  // { path: route.DEFINE_WAREHOUSE, element: <DefineWareHouse /> },
  // { path: route.DEFINE_JOBLOTS, element: <DefineJobLots /> },
  // { path: route.ITEM_CATEGORY, element: <ItemCategory open={open} /> },
  // { path: route.ITEM_TYPE, element: <ItemType openItemType={openItemType} /> },
  // { path: route.UOM_DEFINE, element: <ItemBaseUOM open={open} /> },
  // { path: route.UOM_SCHEDULE, element: <ItemBaseScheduleUOM openItemSchudleUnit={openItemSchudleUnit} /> },
  // { path: route.DISCOUNT_CATEGORY, element: <DiscountCategory /> },
  // { path: route.DISCOUNT_TYPE, element: <DiscountTypes /> },
  // { path: route.ALLOCATE_DISC_CATEGORY_TODISC_TYPE, element: <AllocateDiscCategoryToDiscType /> },
  // { path: route.ALLOCATE_BRAND_ITEM_TO_DISC_TYPE, element: <AllocateBrandItemtoDiscountType /> },
  // { path: route.CUSTOMER_DISCOUNT_POLICY, element: <CustomerDiscountPolicy /> },
  // { path: route.POS_ITEM_ALLOCATION, element: <ItemAllocationForm /> },
  // { path: route.DISCOUNT_POLICY_FOR_PARTY, element: <ItemBaseScheduleUOM openItemSchudleUnit={openItemSchudleUnit} /> },
  // { path: route.SALE_PRICING_SCHEDULE, element: <ItemBaseScheduleUOM openItemSchudleUnit={openItemSchudleUnit} /> },

  //Purchase Trading
  { path: route.PURCHASE_ORDER, element: <PurchaseOrder /> },
  // { path: route.PURCHASE_INVOICE, element: <PurchaseInvoice /> },
  // { path: route.PURCHASE_INVOICE_AGAINST_GRN, element: <PurchaseInvoiceAgainstGrn /> },
  // { path: route.GOODS_RECEIVED_NOTES, element: <GoodsReceivedNotes /> },

  //Purchase Reports
  // { path: route.PURCHASE_ORDER_RETAIL_REGISTER, element: <PurchaseOrderRetailRegister /> },
  // { path: route.GRN_RETAIL_REGISTER, element: <GRNRetailRegister /> },
  // { path: route.PURCHASE_REPORT_ACTIVITY_WISE, element: <PurchaseActivity /> },

  //Sale Trading
  // { path: route.SALE_ORDER, element: <SaleOrder /> },
  // { path: route.SALE_INVOICE_DIRECT, element: <SaleInvoiceDirect /> },

  //ALL Reports
  { path: route.ALL_REPORTS, element: <AllReports /> },

  //Sale Reports
  // { path: route.SALE_ORDER_REGISTER, element: <SaleOrderRegisterTable /> },
  // { path: route.GDN_REGISTER, element: <GdnRegisterTable /> },
  // { path: route.SALE_REPORT_ACTIVITY_WISE, element: <SalesActivity /> },

  //Taxation
  // { path: route.TAX_TYPE, element: <AddTaxType /> },
  // { path: route.TAX_SCHEDULE, element: <AddTaxSheduleScreen /> },
  // { path: route.ITEM_TAX_SCHEDULE, element: <ItemTaxSheduleScreen /> },

  //Store Management
  // { path: route.REQUISITION_ORDER, element: <RequisitionOrder /> },
  // { path: route.STOCK_TRANSFER_NOTE, element: <StockTranferNotes /> },
  // { path: route.STOCK_RECEIVING_NOTE, element: <StockReceivedNotes /> },
  // { path: route.STOCK_TRANSFER_WAREHOUSE, element: <StockTransfer /> },
  // { path: route.STOCK_TRANSFER_NOTE_DIRECT, element: <StockTransferNoteDirect /> },
  // { path: route.STOCK_ADJUSTMENT, element: <StockAdjustment /> },

  //Hrm + system Utilities
  // { path: route.DEFINE_DIVISION, element: <DefineDivision /> },
  // { path: route.SHIFT_TIMING_DEFINE, element: <ShiftTimingDefine /> },
  // { path: route.DISTRICT, element: <RoadMap /> },
  // { path: route.DUTY_ROASTER, element: <DutyRoaster /> },
  // { path: route.EMPLOYEE_REGISTRATION, element: <EmployeeRegistration /> },
];

export const publicRoutes: RouteObject[] = [
  { path: route.LOGIN, element: <LoginPage /> },
  { path: route.COMPANY_BRANCH_DETAIL, element: <CompanyBranchDetails /> },
];
