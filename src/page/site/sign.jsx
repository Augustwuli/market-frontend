import React, { Component } from 'react'
import {
  Alert, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';
import { Link } from 'react-router-dom'
import Api from '@/tool/api.js'
import 'antd/dist/antd.css'


const { Option } = Select;

export default class Sign extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confirmDirty: false,
      toast: false,
      statu: 0,
      messgae: '',
      autoCompleteResult: [],
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.Sign(values);
      }
    });
  }

  Sign (params) {
    let param = {
      userName: params.userName,
      password: params.password,
      phone: params.phone
    }
    Api.post('users/sign', param, r => {
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
          this.props.history.push("/login");
        }
      },1000);
    })
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const { toast ,message,statu } = this.state;
    let dom = null;
    if (toast) {
      dom = <Alert className="toast" message={message} type={statu===1?'success':'error'} />
    }
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
      </Select>
    );
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    
    return (
      <div className="login-page">
        <div style={{width: 'calc(100% - 500px)'}}>
          <img alt="图标" src="../image/login.png" style={{width: '60%'}} ></img>
        </div>
        {dom}
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
              label={(
                <span>
                  昵称&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              )}
            >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入昵称！', whitespace: true }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="密码"
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入密码!',
                }, {
                  validator: this.validateToNextPassword,
                }],
              })(
                <Input type="password" />
              )}
            </Form.Item>
            <Form.Item
              label="确认密码"
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请再一次输入密码!',
                }, {
                  validator: this.compareToFirstPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </Form.Item>
            <Form.Item
              label="手机号码"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>I have read the <a href="">agreement</a></Checkbox>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">注册</Button>
            </Form.Item>
          </Form>
      </div>
    )
  }
}
Sign = Form.create({ name: 'register' })(Sign)