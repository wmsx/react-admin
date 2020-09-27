import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import loadable from 'utils/loadable'

import 'styles/app.scss';
import 'styles/base.scss';

const DefaultLayout = loadable(() => import('components/Layout/DefaultLayout'))

// 基础页面
const View404 = loadable(() => import('views/Others/404'))
const View500 = loadable(() => import('views/Others/500'))
const Login = loadable(() => import('views/Login'))

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact render={()=>(<Redirect to='/index' />)} />
            <Route path="/500" component={View500}/>
            <Route path="/login" component={Login} />
            <Route path="/404" component={View404} />
            <Route component={DefaultLayout}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;