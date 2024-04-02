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
  ScreenDescription: string;
  RouteUrl: string;
};

export type TAddtoFavoriteScreens = {
  ScreenName: string;
  ScreenId: number;
  ScreenTitle: string;
  ScreenRoute: string;
  TargetUrl: string;
  ModuleTypeId: number;
  ScreenDescription: string;
};
