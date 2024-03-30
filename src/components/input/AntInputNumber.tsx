import './style.scss';
import { NamePath } from 'antd/es/form/interface';
import { Form, FormItemProps, InputNumber, InputNumberProps } from 'antd';

function AntInputNumber({
  name,
  label,
  required,
  formItemProps,
  fullWidth = true,
  showLabel = true,
  ...restProps
}: TAntInputNumber) {
  const requiredProps = required
    ? {
        name,
        rules: [{ required: true, message: `Please input your ${label}` }],
      }
    : { name, rules: [] };
  return (
    <Form.Item label={showLabel ? label : ''} {...requiredProps} {...formItemProps}>
      <InputNumber {...restProps} className={fullWidth ? `fullWidth ${restProps?.className}` : restProps?.className} />
    </Form.Item>
  );
}

type TAntInputNumber = {
  label: string;
  name?: NamePath;
  required?: boolean;
  fullWidth?: boolean;
  showLabel?: boolean;
  formItemProps?: FormItemProps;
} & InputNumberProps;

export default AntInputNumber;
