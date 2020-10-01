import { Layout } from 'antd';
import React from 'react'

import AppAside from 'components/Layout/AppAside';
import AppHeader from 'components/Layout/AppHeader';
import AppFooter from 'components/Layout/AppFooter';
import { Redirect, Route, Switch } from 'react-router-dom';
import menu from 'components/Layout/menu';
import routes from 'routes';

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
    let { auth } = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : ''

    return (
      <Layout className='app'>
          <AppAside menuToggle={menuToggle} menu={this.state.menu}/>
          <Layout>
            <AppHeader menuToggle={menuToggle} />
            <Content className='content'>
                <Switch>
                  {
                    routes.map(item => {
                      return (
                        <Route 
                          key={item.path} 
                          path={item.path}
                          exact={item.exact}
                          render={props => !auth ? (<item.component {...props}/>) : item.auth && item.auth.indexOf(auth) !== -1 ? (<item.component {...props}/>) : <Redirect to='/404' {...props}/>}>
                        </Route>
                      )
                    })
                  }
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