import {Layout} from 'antd';
import React from 'react';
import imageLogo from 'assets/images/logo.png';
import CustomMenu from 'components/CustomMenu';

const {Sider} = Layout

class AppAside extends React.Component {

  render() {
    let {menuToggle, menu} = this.props
    return (
      <Sider className='aside' collapsed={menuToggle}>
        <div className='logo'>
          <a href='/'>
            <img src={imageLogo} alt='私享'/>
          </a>
        </div>
        <CustomMenu menu={menu} />
      </Sider>
    );
  }
}


export default AppAside;