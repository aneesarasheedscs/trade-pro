import './style.scss';
import { Form } from 'antd';
import { merge } from 'lodash';
import CardWrapper from './CardWrapper';
import { useEffect, useState } from 'react';
import { TCompanyBranchDetail } from './types';
import { useNavigate } from 'react-router-dom';
import { route } from '@/routes/constants';
import { storedUserDetail } from '@/utils/storageService';
import { AntButton, AntSelectDynamic } from '@/components';
import { useGetBranch, useGetCompany, useGetFinancialYear } from './queries';

const { useForm, useWatch } = Form;

function CompanyBranchDetails() {
  const navigate = useNavigate();
  const [form] = useForm<TCompanyBranchDetail>();
  const formValues = useWatch<TCompanyBranchDetail>([], form);
  const [financialYearObj, setFinancialYearObj] = useState();
  const onSelectChange = (selectedObject: any) => setFinancialYearObj(selectedObject);

  useEffect(() => {
    const userDetail = storedUserDetail();
    if (!userDetail?.access_token) navigate(route.LOGIN);
  }, []);

  const onFinish = (values: TCompanyBranchDetail) => {
    const userDetail: any = JSON.parse(localStorage.getItem('loggedInUserDetail') || '{}');
    merge({}, userDetail, { CompanyId: values.CompanyId, BranchId: values?.BranchId });

    localStorage.setItem('financialYear', JSON.stringify(financialYearObj));

    navigate(route.PURCHASE_ORDER);
  };

  return (
    <CardWrapper>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <AntSelectDynamic
          required
          size="large"
          label="Company"
          name="CompanyId"
          fieldLabel="CompName"
          query={useGetCompany}
          fieldValue="CompanyId"
        />

        <AntSelectDynamic
          required
          size="large"
          label="Branch"
          name="BranchId"
          fieldValue="BranchId"
          fieldLabel="BranchName"
          query={useGetBranch(formValues?.CompanyId)}
        />

        <AntSelectDynamic
          required
          size="large"
          fieldValue="Id"
          name="FinancialYearId"
          label="Financial Year"
          fieldLabel="FinancialYearCode"
          onSelectChange={onSelectChange}
          query={useGetFinancialYear(formValues?.CompanyId)}
        />

        <Form.Item>
          <AntButton size="large" label="Submit" htmlType="submit" />
        </Form.Item>
      </Form>
    </CardWrapper>
  );
}

export default CompanyBranchDetails;
