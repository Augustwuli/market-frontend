import React, { Component } from 'react'
import Topbar from '@/coms/topbar'
import {Button, Icon} from 'antd'

export default class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    let id = this.props.match.params.id
    console.log(id)
  }

  render () {
    return (
      <div>
        <Topbar></Topbar>
        <div className="detail-page">
          <div className="detail-block">
            <div className="detail-img">
              <img></img>
            </div>
            <div className="detail-info">
              <div>我是描述</div>
              <div>我是价格</div>
              <div className="btns">
                <Button type="primary"><Icon type="shopping-cart" />加入购物车</Button>
              </div>
            </div>
          </div>
          <div class="detail-param">
            我是参数我是参数我是参数我是参数我是参数我是参数我是参数我是参数我是参数我是参数我是参数我是参数我是参数
            </div>
        </div>
      </div>
    )
  }
}