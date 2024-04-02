import { Col, Dropdown, MenuProps, Row } from 'antd';
import {
  LogoutOutlined,
  SmileOutlined,
  PhoneOutlined,
  SettingOutlined,
  KeyOutlined,
  BellOutlined,
  DatabaseOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

function UserInfoButton() {
  const storedData: any = localStorage.getItem('loggedInUserDetail');
  const userDetail: TUserDetail = JSON.parse(storedData);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = window.location.origin + '/';
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a className="dropdown" target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          User Profile
        </a>
      ),
      icon: <SmileOutlined />,
    },

    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Backup my data
        </a>
      ),
      disabled: true,
      icon: <DatabaseOutlined />,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Subscriptions
        </a>
      ),

      icon: <BellOutlined />,
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Support
        </a>
      ),

      icon: <PhoneOutlined />,
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Company Settings
        </a>
      ),

      icon: <SettingOutlined />,
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Change Password
        </a>
      ),
      icon: <KeyOutlined />,
    },
    {
      key: '7',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="" onClick={handleLogout}>
          Log Out
        </a>
      ),
      danger: true,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} overlayStyle={{ border: '2px solid #006640', borderRadius: '5%', marginRight: '-2%' }}>
        <a onClick={(e) => e.preventDefault()}>
          <Row gutter={0} className="headerLogoutBtn">
            <Col span={24}>
              <p>
                <UserAddOutlined style={{ color: 'green', fontSize: '20px', marginRight: '5%' }} />
                <span style={{ color: 'black' }}> {userDetail?.UserName} </span>
              </p>
            </Col>
          </Row>
        </a>
      </Dropdown>
    </>
  );
}

export default UserInfoButton;
type TUserDetail = {
  CellNo: string;
  RoleId: number;
  UserId: number;
  RoleName: string;
  UserName: string;
  CompanyId: number;
  TokenData: string;
  BranchesId: number;
  PictureURL: string;
  expires_in: number;
  token_type: string;
  CompanyName: string;
  DisplayName: string;
  LastLoggedIn: string;
  access_token: string;
  CompanyAddress: string;
  OrganizationId: number;
  OrganizationName: string;
  '.issued': Date | string;
  '.expires': Date | string;
  IsActive: string | boolean;
  AuthenticationEnabledForUser: number | string;
  IsHeadOffice: boolean;
};
