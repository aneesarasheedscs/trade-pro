import './style.scss';
import { Form } from 'antd';
import { size } from 'lodash';
import { TUser } from './types';
import { useEffect } from 'react';
import { useLogin } from './queries';
import CardWrapper from './CardWrapper';
import { route } from '@/routes/constants';
import { useNavigate } from 'react-router-dom';
import { AntButton, AntInput } from '@/components';
import { isTokenExpired } from '@/utils/isTokenExpired';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { storedFinancialYear, storedUserDetail } from '@/utils/storageService';

function LoginPage() {
  const navigate = useNavigate();

  const { mutate, isError, isPending, isSuccess } = useLogin();

  const onFinish = (values: TUser) => mutate(values);

  useEffect(() => {
    const userDetail = storedUserDetail();
    const financialYearDetail = storedFinancialYear();

    if (userDetail?.access_token && !isTokenExpired()) {
      if (size(financialYearDetail) < 1) {
        window.location.href = window.location.origin + route.COMPANY_BRANCH_DETAIL;
      } else {
        navigate(route.PURCHASE_ORDER);
      }
    }
  }, [isSuccess]);

  return (
    <CardWrapper>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
        <AntInput
          required
          size="large"
          name="username"
          label="Username"
          prefix={<UserOutlined />}
          placeholder="Enter username"
        />

        <AntInput
          required
          size="large"
          name="password"
          type="password"
          label="Password"
          prefix={<LockOutlined />}
          placeholder="Enter password"
        />

        <Form.Item>
          <AntButton size="large" label="Log In" htmlType="submit" isError={isError} isLoading={isPending} />
        </Form.Item>
      </Form>
    </CardWrapper>
  );
}

export default LoginPage;
