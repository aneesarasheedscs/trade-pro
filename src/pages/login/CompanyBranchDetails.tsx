import './style.scss';
import { merge } from 'lodash';
import { Col, Form, Row } from 'antd';
import CardWrapper from './CardWrapper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { route } from '@/routes/constants';
import { storedUserDetail } from '@/utils/storageService';
import { AntButton, AntSelectDynamic } from '@/components';
import { Company, FinancialYear, TCompanyBranchDetail } from './types';
import { useGetBranch, useGetCompany, useGetFinancialYear } from './queries';

const { useForm, useWatch } = Form;

function CompanyBranchDetails() {
  const navigate = useNavigate();
  const userDetail = storedUserDetail();
  const [form] = useForm<TCompanyBranchDetail>();
  const formValues = useWatch<TCompanyBranchDetail>([], form);
  const [headOffice, setheadOffice] = useState<boolean | undefined>();
  const [financialYearObj, setFinancialYearObj] = useState<FinancialYear | any>();
  const onSelectChange = (selectedObject: any) => setFinancialYearObj(selectedObject);
  const { data: companyId, isSuccess: successCompany } = useGetCompany();
  const { data, isPending } = useGetBranch(formValues?.CompanyId);
  const { data: financialYear, isSuccess, isLoading } = useGetFinancialYear(formValues?.CompanyId);
  const financialYearData = financialYear?.data?.Data?.Result;

  useEffect(() => {
    if (!userDetail?.access_token) navigate(route.LOGIN);
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      CompanyId: companyId?.data?.Data?.Result?.[0]?.CompanyId,
    });
  }, [form, companyId]);
  useEffect(() => {
    form.setFieldsValue({
      BranchId: data?.data?.Data?.Result?.[0]?.BranchId,
      FinancialYearId: financialYear?.data?.Data?.Result?.[0]?.Id,
    });
    setheadOffice(companyId?.data?.Data?.Result?.[0]?.IsHeadOffice);
    if (isSuccess && !isLoading) setFinancialYearObj(financialYearData);
  }, [form, data, financialYear]);
  const onFinish = (values: TCompanyBranchDetail) => {
    const userDetail: any = JSON.parse(localStorage.getItem('loggedInUserDetail') || '{}');
    const mergeObject = merge({}, userDetail, {
      CompanyId: values.CompanyId,
      BranchId: values?.BranchId,
      IsHeadOffice: headOffice,
    });
    const financialYearObject = financialYearObj.reduce((acc: any, cur: any) => {
      acc = cur;
      return acc;
    }, {});
    const financialYearString = JSON.stringify(financialYearObject);
    localStorage.setItem('financialYear', financialYearString);
    localStorage.setItem('loggedInUserDetail', JSON.stringify(mergeObject));
    navigate(route.PURCHASE_ORDER);
  };
  const handleCompanyChange = async (value: number) => {
    const obj = await companyId?.data?.Data?.Result.find((item: Company) => item.CompanyId === value);
    setheadOffice(obj?.IsHeadOffice);
  };
  return (
    <CardWrapper>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <AntSelectDynamic
          required
          size="middle"
          label="Company"
          name="CompanyId"
          fieldLabel="CompName"
          fieldValue="CompanyId"
          query={useGetCompany}
          onChange={handleCompanyChange}
        />

        <AntSelectDynamic
          required
          size="middle"
          label="Branch"
          name="BranchId"
          fieldValue="BranchId"
          fieldLabel="BranchName"
          query={() => useGetBranch(formValues?.CompanyId)}
        />

        <AntSelectDynamic
          required
          size="middle"
          fieldValue="Id"
          name="FinancialYearId"
          label="Financial Year"
          fieldLabel="FinancialYearCode"
          onSelectChange={onSelectChange}
          query={() => useGetFinancialYear(formValues?.CompanyId)}
        />

        <Form.Item>
          <Row justify={'center'}>
            <Col span={4}>
              <AntButton size="large" className="btnColor" label="Submit" htmlType="submit" />
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </CardWrapper>
  );
}

export default CompanyBranchDetails;
