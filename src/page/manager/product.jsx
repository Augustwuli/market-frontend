import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { Button, Table, Divider } from 'antd';
import Navbar from '@/coms/navbar'
import Api from '@/tool/api.js'

const { Column } = Table;

export default class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      defaultSelected: '2',
      data: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  getData () {
    Api.get('products/manager', null, r => {
      console.log(r.data)
      this.setState({
        data: r.data.products
      })
    })
  }

  delete = (e) => {
    let param = {
      id: e
    }
    Api.post(`products/delete`, param, r => {
      console.log(r)
      if(r.success === true){
        this.getData()
      }
    })
  }

  render () {
    const {defaultSelected,data} = this.state;
    return (
      <div className="manager-page">
        <Navbar defaultSelected={defaultSelected}></Navbar>
        <div className="main">
          <div className="btns">
            <Link to={`/manager/addorder`}><Button icon="plus" size="large" type="primary">添加产品</Button></Link>
          </div>
          <Table dataSource={data} rowKey="id">
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
            title="库存"
            dataIndex="num"
            key="num"
          />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <Link to={`/manager/editorder/${record.id}`}>编辑</Link>
                <Divider type="vertical" />
                <a href="javascript:;" onClick={() =>this.delete(record.id)}>删除</a>
              </span>
            )}
          />
        </Table>
        </div>
      </div>
    )
  }
}