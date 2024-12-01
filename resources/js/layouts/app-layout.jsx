import React, { useState } from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import SideNav from '@/shared/partials/side-nav';
import PageActions from '@/shared/components/page-actions';

export default function AppLayout(props) {
  const { title, children } = props;
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
        }}
      >
        <SideNav />
      </Sider>
      <Layout style={{padding: '6px 0', marginLeft: 240}}>
        <Content theme='light'>
          <div className="container">
            <PageActions {...props} />
            {children}
            </div>
          </Content>
      </Layout>
    </Layout>
  );
}
