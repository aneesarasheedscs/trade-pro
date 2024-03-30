import { Menu, Result } from 'antd';
import { useGetMenu } from './queries';
import { groupBy, map, size } from 'lodash';
import { useEffect, useState } from 'react';
import { AntButton, TableLoader } from '..';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
  const navigate = useNavigate();
  const { data, isError, refetch, isSuccess, isLoading } = useGetMenu();

  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    if (isSuccess) {
      setList(menuList(data?.data?.Data?.Result));
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

  const menuList = (data: any[]) => {
    if (size(data) > 0) {
      const groupedData = groupBy(data, (item) => `${item.ModuleID}-${item.ModuleDescription}`);

      const result = map(groupedData, (group) => {
        const [firstItem] = group;
        return { children: group, ...firstItem };
      });

      return map(result, (item, index) => ({
        label: item?.ModuleDescription,
        key: `${index} ${item?.ModuleDescription}`,
        children: map(item?.children, (childItem, i) => ({
          key: `${childItem?.RouteUrl}`,
          label: childItem?.ScreenAlias,
        })),
      }));
    }

    return [];
  };

  return (
    <Menu mode="inline" items={list} onClick={({ key }) => navigate(key)} style={{ paddingTop: 10, height: '100%' }} />
  );
}

export default SideMenu;
