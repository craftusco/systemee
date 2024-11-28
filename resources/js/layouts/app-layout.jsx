import React, { useState } from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import SideNav from '@/shared/partials/side-nav';
import TopNav from '@/shared/partials/top-nav';

export default function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider className="main-layout">
      <Sider
        collapsed={collapsed}
        width={240}
        collapsedWidth={
          window.innerWidth < 768 ? 0 : 80
        }
        theme='light'
        style={{
          overflow: 'auto',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#f5f5f5',
          borderRight: '1px solid rgba(0, 0, 0, 0.15)',
        }}
      >
        <SideNav />
      </Sider>
      <Layout style={{padding: '6px 0', marginLeft: 240}}>
        <Header>
          <TopNav />
        </Header>
        <Content theme='light'>
          <div className="container">{children}</div>
          </Content>
      </Layout>
    </Layout>
  );
}
