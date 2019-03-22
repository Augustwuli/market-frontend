import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Button} from 'antd'
import Topbar from '@/coms/topbar'

export default class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Topbar></Topbar>
        <div className="cart-page">
          <div className="product-list">
            <div className="product-detail">
              <div className="product-block">
                <img className="product-img" alt="产品图片" src=""></img>
                <div className="product-info">
                  <div className="info-font">描述产品描述产品描述产品描述产产产品描述产产品描述产品描述产产品描述产品描述产品描述产品描述产品描述</div>
                  <div className="info-count">数量为:123</div>
                  <div className="info-cost">价格为:123</div>
                </div>
              </div>
              <div style={{textAlign: 'right'}}>
                <Button>删除订单</Button>
                <Button style={{marginLeft: 20}} type="primary">立即支付</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}