import {Layout} from 'antd';
import React from 'react';

const {Sider} = Layout

class AppAside extends React.Component {

  render() {
    let {menuToggle} = this.props
    return (
      <Sider className='aside' collapsed={menuToggle}>
        
      </Sider>
    );
  }
}


export default AppAside;