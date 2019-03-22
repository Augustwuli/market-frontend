import React, { Component } from 'react'
import {Form, Icon, Input, Button, Radio, Alert} from 'antd'
import { Link } from 'react-router-dom'
import Api from '@/tool/api.js'
import 'antd/dist/antd.css'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toast: false,
      statu: 0,
      messgae: ''
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.Login(values);
      }
    });
  }

  Login (params) {
    Api.post('users/login', params, r => {
      this.setState({
        message: r.message,
        toast: true,
        statu: r.statu
      },function(){
        console.log('getdata'+this.state.message,this.state.toast,this.state.statu)
      })
      setTimeout(()=>{
        this.setState({
          toast: false,
        },function(){
          console.log('getdata'+this.state.toast)
        })
        if(r.statu === 1) {
          if(params.type === '0'){
            sessionStorage.setItem('managerId', r.data.userId)
            sessionStorage.setItem('managerName', params.userName)
            this.props.history.push("/manager");
          }else if(params.type === '1'){
            sessionStorage.setItem('userId', r.data.userId)
            sessionStorage.setItem('userName', params.userName)
            this.props.history.push("/");
          }
        }
      },1000);
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { toast ,message,statu } = this.state;
    let dom = null;
    if (toast) {
      dom = <Alert className="toast" message={message} type={statu===1?'success':'error'} />
    }
    return (
      <div className="login-page">
        <div style={{width: 'calc(100% - 500px)'}}>
          <img alt="图标" src="../image/login.png" style={{width: '60%'}} ></img>
        </div>
        <div>
        {dom}
          <Form onSubmit={this.handleSubmit} className="login-form" style={{width: 300}}>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              Or <Link to="/sign">立即注册!</Link>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('type')(
                <Radio.Group>
                  <Radio value="1">用户</Radio>
                  <Radio value="0">管理员</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
Login = Form.create({ name: 'normal_login' })(Login)