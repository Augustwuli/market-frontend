import React, { Component } from 'react'
import {Menu, Icon, Input} from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
const Search = Input.Search;

export default class Topbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: '',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    // this.setState({
    //   current: e.key,
    // });
  }

  render () {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="top-bar"
        >
          <Menu.Item>
            <Search
              placeholder="搜索"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Menu.Item>
          <Menu.Item key="app">
            <Link to={`/user/cart`}><Icon type="shopping-cart" />购物车</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to={`/login`}><Icon type="user"/>登录/注册</Link>
          </Menu.Item>
        </Menu>
    )
  }
}