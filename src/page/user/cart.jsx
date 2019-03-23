import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Api from '@/tool/api.js'
import {Button} from 'antd'
import Topbar from '@/coms/topbar'

export default class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[]
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData () {
    let userId = sessionStorage.getItem('userId');
    if(userId){
      Api.get(`carts/${userId}`, null, r => {
        console.log(r)
        this.setState({
          list: r.data.carts
        })
      })
    }else{
      alert('您还没登录')
    }
  } 

  pay = (e) => {
    console.log(e)
  }

  delete = (e) => {
    let param = {
      id: e
    }
    Api.post(`carts/delete`, param, r => {
      console.log(r)
      if(r.success === true){
        this.getData()
      }
    })
  }

  render () {
    let { list } = this.state;
    let dom = null;
    if(list.length !== 0){
      let listDom = list.map((i, k) => {
        return (
          <div key={k} className="product-detail">
              <div className="product-block">
                <img className="product-img" alt="产品图片" src={`http://localhost:3000/${i.products.thumb_url}`}></img>
                <div className="product-info">
                  <div className="info-font">{i.products.title}</div>
                  <div className="info-count">数量为:{i.num}</div>
                  <div className="info-cost">价格为:{i.products.price}</div>
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <Button onClick={() =>this.delete(i.id)}>删除订单</Button>
                <Button onClick={() =>this.pay(i.id)} style={{marginLeft: 20}} type="primary">立即支付</Button>
              </div>
            </div>        
          )
    })
    dom = (
      <div className='product-list'>
        {listDom}
      </div>
    )
    }
    return (
      <div>
        <Topbar></Topbar>
        <div className="cart-page">
          {dom}
        </div>
      </div>
    )
  }
}