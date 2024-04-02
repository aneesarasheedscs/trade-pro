export type TUser = { username: string; password: string };

export type TCompanyBranchDetail = {
  BranchId: number;
  CompanyId: number;
  FinancialYearId: number;
};
export type Company = {
  CompanyId: number;
  CompName: string;
  IsHeadOffice: boolean;
};
export type FinancialYear = {
  PostState: boolean;
  Status: boolean;
  End_Period: Date | string;
  EntryDate: Date | string;
  ModifyDate: Date | string;
  PostDate: Date | string;
  Start_Period: Date | string;
  CompanyId: number;
  EntryUser: number;
  Id: number;
  ModifyUser: number;
  OrganizationId: number;
  PostUser: number;
  FinancialYearCode: Date | string;
};
