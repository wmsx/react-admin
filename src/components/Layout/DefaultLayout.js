import { Layout } from 'antd';
import React from 'react'

import AppAside from 'components/Layout/AppAside';
import AppHeader from 'components/Layout/AppHeader';
import AppFooter from 'components/Layout/AppFooter';
import { Route, Switch } from 'react-router-dom';
import menu from 'components/Layout/menu'

import 'styles/layout.scss';

const {Content} = Layout

class DefaultLayout extends React.Component {

  state = {
    menu: [],
  }

  isLogin() {
    this.setState({
      menu: this.getMenu(menu)
    })
  }

  getMenu() {
    return menu
  }

  componentDidMount() {
    this.isLogin()
  }


  render() {
    let  {menuToggle} = this.props
    return (
      <Layout className='app'>
          <AppAside menuToggle={menuToggle} menu={this.state.menu}/>
          <Layout>
            <AppHeader menuToggle={menuToggle} />
            <Content className='content'>
                <Switch>
                  <Route />
                </Switch>
            </Content>
            <AppFooter/>
          </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;