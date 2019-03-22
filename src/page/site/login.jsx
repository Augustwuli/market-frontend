import React, { Component } from 'react'
import {Form, Icon, Input, Button} from 'antd'
import 'antd/dist/antd.css'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <div style={{width: 'calc(100% - 500px)'}}>
          <img alt="轮播图片" src="../image/login.png" style={{width: '60%'}} ></img>
        </div>
        <div>
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
              Or <a href="">立即注册!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
Login = Form.create({ name: 'normal_login' })(Login)