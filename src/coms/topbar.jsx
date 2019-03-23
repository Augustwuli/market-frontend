import React, { Component } from 'react'
import {Menu, Icon, Input} from 'antd'
import { Link } from 'react-router-dom'
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css'
const Search = Input.Search;

class Topbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: false,
      userName: ''
    }
  }

  componentDidMount () {
    let userName = sessionStorage.getItem('userName');
    if(userName){
      this.setState({
        login: true,
        userName: userName
      })
    }
  }

  jump = (e) => {
    this.props.history.push({
      pathname: '/search',
      state: {
        keyword: e
      }
    })
  }

  render () {
    const {login,userName} = this.state;
    let dom = null;
    if(login){
      dom = <Link to={`/login`}><Icon type="user"/>{userName}</Link>;
    }else{
      dom = <Link to={`/login`}><Icon type="user"/>登录/注册</Link>;
    }
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
              onSearch={value => this.jump(value)}
              style={{ width: 200 }}
            />
          </Menu.Item>
          <Menu.Item key="home">
            <Link to={`/`}><Icon type="home" />首页</Link>
          </Menu.Item>
          <Menu.Item key="cart">
            <Link to={`/user/cart`}><Icon type="shopping-cart" />购物车</Link>
          </Menu.Item>
          <Menu.Item key="login">
            {dom}
          </Menu.Item>
        </Menu>
    )
  }
}
export default withRouter(Topbar);