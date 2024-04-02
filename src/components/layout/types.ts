export type TSideMenu = {
  Id: number;
  App: string;
  AppId: number;
  Value: boolean;
  UserId: number;
  IconUrl: string;
  RightsID: number;
  ScreenID: number;
  ModuleID: number;
  CompanyId: number;
  RightName: string;
  TargetUrl: string;
  ScreenName: string;
  ScreenAlias: string;
  IsFavorite: boolean;
  ModuleTypeId: number;
  TblUserRightslst: any;
  ModuleDescription: string;
  ModelMenuControllName: string;
  MenuControllName: null | string;
  RouteUrl: string;
  ScreenDescription: string;
};
export type TSideMenuProps = {
  collapsed: boolean;
  setCollapsed: (id: boolean) => void;
};
