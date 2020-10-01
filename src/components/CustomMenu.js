import React from 'react'
import { Menu } from 'antd';
import { withRouter, Link } from 'react-router-dom'

const { SubMenu, Item } = Menu;

class CustomMenu extends React.Component {

  state = {
    openKeys: [],
    selectedKeys: [],
  }

  getOpenKeys(string) {
    let newStr = '', newArr = [], arr = string.split('/').map(i => '/' + i)
    for (let i = 1; i < arr.length; i++) {
      newStr += arr[i]
      newArr.push(newStr)
    }
    return newArr
  }

  // 页面刷新的时候可以定位到 menu 显示
  componentDidMount() {
    let {pathname} = this.props.location
    this.setState({
      selectedKeys: [pathname],
      openKeys:this.getOpenKeys(pathname)
    })
  }

  renderSubMenu({key, icon, title, subs}) {
    return (
      <SubMenu key={key} title={title} icon={icon}>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }

  renderMenuItem({key, icon, title}) {
    return (
      <Item key={key} icon={icon} title={title}>
        <Link to={key}></Link>
        {title}
      </Item>
    )
  }

  onOpenChange = (openKeys) => {
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      })
      debugger
      return
    }

  }

  render() {
    return (
      <Menu theme='dark' 
            mode='inline' 
            // openKeys={openKeys} 
            // selectedKeys={selectedKeys}
            // onClick={(e) =>  this.setState({selectedKeys:[e.key]})}
            // onOpenChange={this.onOpenChange}
            >
        {this.props.menu && this.props.menu.map(item => {
          return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
        })}
      </Menu>
    )
  }

  // render() {
  //   return (
  //       <Menu
  //         defaultSelectedKeys={['1']}
  //         defaultOpenKeys={['sub1']}
  //         mode='inline'
  //       >
  //         <Menu.Item key="1" icon={<MailOutlined />}>
  //           Navigation One
  //         </Menu.Item>
  //         <Menu.Item key="2" icon={<CalendarOutlined />}>
  //           Navigation Two
  //         </Menu.Item>
  //         <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation Two">
  //           <Menu.Item key="3">Option 3</Menu.Item>
  //           <Menu.Item key="4">Option 4</Menu.Item>
  //           <SubMenu key="sub1-2" title="Submenu">
  //             <Menu.Item key="5">Option 5</Menu.Item>
  //             <Menu.Item key="6">Option 6</Menu.Item>
  //           </SubMenu>
  //         </SubMenu>
  //         <SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">
  //           <Menu.Item key="7">Option 7</Menu.Item>
  //           <Menu.Item key="8">Option 8</Menu.Item>
  //           <Menu.Item key="9">Option 9</Menu.Item>
  //           <Menu.Item key="10">Option 10</Menu.Item>
  //         </SubMenu>
  //         <Menu.Item key="link" icon={<LinkOutlined />}>
  //           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //             Ant Design
  //           </a>
  //         </Menu.Item>
  //       </Menu>
  //   );
  // }

}

export default withRouter(CustomMenu);