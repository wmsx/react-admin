import React from 'react'
import { Menu, Dropdown, Icon, Layout, Avatar, Badge } from 'antd'

const { Header } = Layout

class CustomMenu extends React.Component {

  renderSubMenu({key, icon, title, subs}) {
    return (
      <Menu.SubMenu key={key} title={title} icon={icon}>
        {
          subs && subs.map(item => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }

  renderMenuItem({key, icon, title}) {
    return (
      <Menu.Item key={key} icon={icon} title={title}>
        {title}
      </Menu.Item>
    )
  }

  render() {
    return (
      <Menu theme='dark' mode='inline'>
        {this.props.menu && this.props.menu.map(item => {
          return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
        })}
      </Menu>
    )
  }

}

export default CustomMenu;