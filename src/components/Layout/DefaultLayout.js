import { Layout } from 'antd';
import React from 'react'

import AppAside from 'components/Layout/AppAside';
import AppHeader from 'components/Layout/AppHeader';
import AppFooter from 'components/Layout/AppFooter';
import { Route, Switch } from 'react-router-dom';

import 'styles/layout.scss';

const {Content} = Layout

class DefaultLayout extends React.Component {

  state = {

  }

  render() {
    let  {menuToggle} = this.props

    return (
      <Layout className='app'>
          <AppAside menuToggle={menuToggle} />
          <Layout>
            <AppHeader menuToggle={menuToggle}/>
            <Content className='content'>
                <Switch>
                  {}
                </Switch>
            </Content>
            <AppFooter/>
          </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;