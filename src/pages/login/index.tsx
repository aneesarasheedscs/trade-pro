import './style.scss';
import { size } from 'lodash';
import { TUser } from './types';
import { Col, Form, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useLogin } from './queries';
import CardWrapper from './CardWrapper';
import { route } from '@/routes/constants';
import { useNavigate } from 'react-router-dom';
import { AntButton, AntInput } from '@/components';
import { isTokenExpired } from '@/utils/isTokenExpired';
import { storedFinancialYear, storedUserDetail } from '@/utils/storageService';
import { LockOutlined, UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

function LoginPage() {
  const navigate = useNavigate();
  const [type, setType] = useState(false);

  const { mutate, isError, isPending, isSuccess } = useLogin();

  const onFinish = (values: TUser) => mutate(values);

  useEffect(() => {
    const userDetail = storedUserDetail();
    const financialYearDetail = storedFinancialYear();

    if (userDetail?.access_token && !isTokenExpired()) {
      if (size(financialYearDetail) < 1) {
        window.location.href = window.location.origin + route.COMPANY_BRANCH_DETAIL;
      } else {
        navigate(route.APP_MENU);
      }
    }
  }, [isSuccess]);
  const showPassword = () => {
    setType(!type);
  };

  return (
    <CardWrapper>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
        <AntInput
          required
          size="middle"
          name="username"
          label="Username"
          prefix={<UserOutlined />}
          placeholder="Enter username"
        />

        <AntInput
          required
          size="middle"
          name="password"
          type={type ? 'string' : 'password'}
          label="Password"
          prefix={<LockOutlined />}
          suffix={type ? <EyeInvisibleOutlined onClick={showPassword} /> : <EyeOutlined onClick={showPassword} />}
          placeholder="Enter password"
        />

        <Form.Item>
          <Row justify={'center'}>
            <Col span={4}>
              <AntButton
                className="btnColor"
                label="Log In"
                size="large"
                htmlType="submit"
                isError={isError}
                isLoading={isPending}
              />
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </CardWrapper>
  );
}

export default LoginPage;
