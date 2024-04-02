import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

function AppTheme({ children, colorPrimary = '#25A7DF' }: TAppTheme) {
  return <ConfigProvider theme={{ token: { colorPrimary, borderRadius: 5 } }}>{children}</ConfigProvider>;
}

type TAppTheme = { children: ReactNode; colorPrimary?: string };

export default AppTheme;
