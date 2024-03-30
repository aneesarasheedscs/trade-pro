import { Tabs } from 'antd';
import PurchaseOrderTable from './table';
import { useTranslation } from 'react-i18next';

function PurchaseOrder() {
  const { t } = useTranslation();

  return (
    <>
      <Tabs
        type="card"
        size="large"
        defaultActiveKey="1"
        className="tabs-margin-bottom-0"
        items={[{ key: '1', label: t('history'), children: <PurchaseOrderTable /> }]}
      />
    </>
  );
}

export default PurchaseOrder;
