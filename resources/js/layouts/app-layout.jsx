import React, { useState } from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
import SideNav from '@/shared/partials/side-nav';
import PageActions from '@/shared/components/page-actions';
import { Head } from '@inertiajs/react';

export default function AppLayout(props) {
  const { title, children } = props;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <Head title={`${title} - Systemee`}/>
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
      <Layout style={{padding: '10px 0', marginLeft: 240}}>
        <Content theme='light' style={{height: '100svh'}}>
          <div className="container">
            <PageActions {...props} />
              {children}
            </div>
          </Content>
      </Layout>
    </Layout>
    </>
  );
}
