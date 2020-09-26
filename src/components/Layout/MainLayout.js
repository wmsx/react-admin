import { BackTop, Layout } from 'antd';
import React from 'react';
import { Sidebar } from 'components/Layout';
import 'styles/layout.scss'

class MainLayout extends React.Component {

  render() {
    return (
      <Layout className='app'>
        <BackTop />
        <Sidebar />
      </Layout>
    );
  }
}

export default MainLayout;