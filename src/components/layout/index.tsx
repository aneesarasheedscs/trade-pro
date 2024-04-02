import './style.scss';
import Sidebar from './Sidebar';
import SideMenu from './SideMenu';
import { ReactNode, useState } from 'react';
import { AppHeader } from './header/Header';
import { Button, Col, Layout, Row } from 'antd';
import LogoImage from './Eccountbook Logo.png';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Content } = Layout;

function AppLayout({ children }: TAppLayout) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <AppHeader
        sideMenu={<SideMenu collapsed={collapsed} setCollapsed={setCollapsed} />}
        appLogo={
          <Row align="middle" gutter={6} style={{}}>
            <Col md={0} lg={3} xl={4} xxl={3} sm={0} xs={0} style={{ marginTop: '-4%' }}>
              <Button
                type="text"
                icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                }}
              />
            </Col>
            <Col xxl={21} xl={20} md={20} lg={16} sm={24} xs={24}>
              {' '}
              <img src={LogoImage} className="headerlogoImage" width={'70%'} height={'40%'} style={{ marginTop: '' }} />
            </Col>
          </Row>
        }
        languageSwitcher={<LanguageSwitcher />}
      />
      <Layout style={{ marginTop: 65 }}>
        <Sidebar collapsed={collapsed}>
          <SideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sidebar>
        <Content className={collapsed ? 'content-container' : 'content-container-expanded'}>{children}</Content>
      </Layout>
    </Layout>
  );
}

type TAppLayout = { children: ReactNode };

export default AppLayout;
