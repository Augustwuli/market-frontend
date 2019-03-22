
import React, { Component } from 'react'
import {Menu, Icon} from 'antd'
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css'

class Topbar extends Component {
  constructor (props) {
    super(props);
  }

  selectItem = (index,indexPath) => {
    if(index.key === '1'){
      this.props.history.push({
        pathname: '/manager',
      })
    }else if(index.key === '2'){
      this.props.history.push({
        pathname: '/manager/product',
      })
    }else if(index.key === '3'){
      this.props.history.push({
        pathname: '/manager/order',
      })
    }
  }

  render () {
    const { defaultSelected } = this.props ;
    return (
      <div style={{ position: 'fixed', width: '20%' ,height: '100%',background: '#001529'}}>
        <Menu
          defaultSelectedKeys={[defaultSelected]}
          mode="inline"
          theme="dark"
          onSelect={this.selectItem}
          >
          <Menu.Item key="0" disabled>
            <Icon type="user" />
            <span>管理员登录</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="home" />
            <span>商城管理</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="switcher" />
            <span>产品管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="file" />
            <span>订单管理</span>
          </Menu.Item>
         </Menu>
      </div>
    )
  }
}
export default withRouter(Topbar);