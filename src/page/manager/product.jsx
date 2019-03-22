import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, Table, Divider, Tag } from 'antd';
import Navbar from '@/coms/navbar'

const { Column } = Table;
const data = [{
  key: '1',
  id:'1',
  title: '测试',
  sale: 23,
  num: 68
}, {
  key: '2',
  id:'2',
  title: '测试',
  sale: 34,
  num: 68
}, {
  key: '3',
  id:'3',
  title: '测试',
  sale: 46,
  num: 68
}];

export default class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      defaultSelected: '2',
    }
  }

  render () {
    const {defaultSelected} = this.state;
    return (
      <div className="manager-page">
        <Navbar defaultSelected={defaultSelected}></Navbar>
        <div className="main">
          <div className="btns">
            <Button icon="plus" size="large" type="primary">添加产品</Button>           
          </div>
          <Table dataSource={data}>
          <Column
            title="编号"
            dataIndex="id"
            key="id"
          />
          <Column
            title="标题"
            dataIndex="title"
            key="title"
          />
          <Column
            title="销量"
            dataIndex="sale"
            key="sale"
          />
          <Column
            title="库存"
            dataIndex="num"
            key="num"
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a href="javascript:;">编辑</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
              </span>
            )}
          />
        </Table>
        </div>
      </div>
    )
  }
}