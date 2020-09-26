import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainLayout } from 'components/Layout';
import 'styles/app.scss';
import 'styles/base.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <MainLayout>
            <Route path="/" />
          </MainLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;