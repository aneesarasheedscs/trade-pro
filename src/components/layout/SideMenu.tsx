import { Menu, Result, Row } from 'antd';
import { useGetMenu } from './queries';
import { groupBy, map, size } from 'lodash';
import { useEffect, useState } from 'react';
import { AntButton, TableLoader } from '..';
import { Link, useLocation } from 'react-router-dom';
import { TSideMenu, TSideMenuProps } from './types';
import {
  AccountBookOutlined,
  TransactionOutlined,
  FileTextOutlined,
  ShopOutlined,
  AppstoreOutlined,
  DollarOutlined,
  SettingOutlined,
  MoneyCollectOutlined,
} from '@ant-design/icons';

function SideMenu({ collapsed, setCollapsed }: TSideMenuProps) {
  const { data, isError, refetch, isSuccess, isLoading } = useGetMenu();
  const { pathname } = useLocation();
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (isSuccess) {
      const filteredReports = data?.data?.Data?.Result?.filter(
        (item: any) => item.ModuleTypeId === 1 || item.ModuleTypeId === 4 || item.ModuleTypeId === 3
      );
      setList(menuList(filteredReports));
    }
  }, [data, isSuccess]);

  if (isError) {
    return (
      <Result
        title=""
        status="error"
        style={{ marginTop: '10em' }}
        subTitle="Sorry, something went wrong"
        extra={[<AntButton label="Retry" onClick={() => refetch()} />]}
      />
    );
  }

  if (isLoading) {
    return (
      <div style={{ padding: 15 }}>
        <TableLoader numberOfSkeletons={13} />
      </div>
    );
  }
  const menuList = (data: TSideMenu[]) => {
    if (size(data) > 0) {
      const groupedData = groupBy(data, (item) => `${item.ModuleID}-${item.ModuleDescription}`);

      const additionalItem: TSideMenu | any = {
        ModuleID: 0,
        ModuleDescription: 'Reports',
        ScreenAlias: 'Reports',
        ModuleTypeId: 1,
      };

      return [
        ...map(groupedData, (group) => {
          const [firstItem] = group;
          return {
            children: group,
            ...firstItem,
          };
        }),
        { ...additionalItem },
      ];
    }

    return [];
  };
  const filteredList = list.filter((item) => item.ModuleDescription !== 'Reports');
  const defaultIcons = [
    <AccountBookOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <TransactionOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <ShopOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <MoneyCollectOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <AppstoreOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <AppstoreOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <DollarOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <SettingOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
    <FileTextOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />,
  ];

  return (
    <>
      <Menu mode="inline" style={{ paddingTop: 10, height: '100%' }}>
        {map(filteredList, ({ ModuleDescription, children }: TSideMenu & { children: TSideMenu[] }, index: number) => (
          <Menu.SubMenu
            // className={collapsed ? 'ant-menu-submenu-arrow' : 'ant-menu-submenu-arrow'}
            key={index}
            title={
              <Row className="menus">
                <h4 className="menu-item-title" style={{ color: 'gray' }} onClick={() => setCollapsed(true)}>
                  {defaultIcons[index % defaultIcons.length]}
                  <span> &nbsp;{ModuleDescription}</span>
                </h4>
              </Row>
            }
          >
            {map(children, ({ ScreenAlias }, i) => {
              const path = ScreenAlias?.toLowerCase()?.replace(/ /g, '-');
              console.log(path);
              return (
                <Menu.Item key={i} className={`menu-item ${path === pathname ? 'active' : ''}`}>
                  <Link to={path}>
                    <h5 style={{ color: 'gray', marginLeft: '0%' }}>
                      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; {ScreenAlias}
                    </h5>
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        ))}
        {list.some((item) => item.ModuleDescription === 'Reports') && (
          <Menu.Item key="reports" className="menu-item-title">
            <Link to="/all_reports">
              <h4 className="menu-item-heading" style={{ color: 'gray' }}>
                <FileTextOutlined style={{ fontWeight: 'bolder', fontSize: '16px' }} />
                <span> &nbsp;Reports</span>
              </h4>
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </>
    // <Menu mode="inline" items={list} onClick={({ key }) => navigate(key)} style={{ paddingTop: 10, height: '100%' }} />
  );
}

export default SideMenu;
