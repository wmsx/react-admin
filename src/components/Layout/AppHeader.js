import React from 'react';
import {Layout, Avatar} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined,UserOutlined } from '@ant-design/icons';


const {Header} = Layout
class AppHeader extends React.Component {

  render() {
    let {menuToggle} = this.props

    return (
      <Header className='header'> 
        <div className='left'>
          {menuToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div className='right'>
          <div>
            <Avatar icon={<UserOutlined />}/>
          </div>
        </div>
      </Header>
    );
  }
}


export default AppHeader;