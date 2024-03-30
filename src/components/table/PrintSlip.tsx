import { Col, Tooltip } from 'antd';
import AntButton from '../button/AntButton';
import { FileTextOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

function PrintSlip({ disabled, options = { show: true, enabled: true } }: TPrintSlip) {
  useEffect(() => {
    if (options?.isSuccess) {
      if (options?.data) {
        const blob = new Blob([options?.data], { type: 'application/pdf' });
        const url = document.createElement('a');
        url.href = URL.createObjectURL(blob);
        url.target = '_blank';
        url.click();
      }
    }
  }, [options?.isSuccess]);

  return (
    <Col>
      <Tooltip arrow title="Print Slip">
        <AntButton
          type="default"
          onClick={options.onClick}
          icon={<FileTextOutlined />}
          loading={options?.isPending}
          disabled={disabled || !options?.enabled}
        />
      </Tooltip>
    </Col>
  );
}

type TPrintSlip = {
  disabled?: boolean;
  options?: {
    data?: any;
    show?: boolean;
    enabled?: boolean;
    fileName?: string;
    isSuccess?: boolean;
    isPending?: boolean;
    onClick?: VoidFunction;
  };
};

export default PrintSlip;
