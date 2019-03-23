import React, { Component } from 'react'
import Topbar from '@/coms/topbar'
import Api from '@/tool/api.js'
import {Button, Icon} from 'antd'

export default class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      id: 0
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    let id = this.props.match.params.id
    Api.get(`products/detail/${id}`, null, r => {
      console.log(r.data)
      this.setState({
        data: r.data,
        id: id
      })
    })
  }

  addCart = () =>{
    console.log('我被点击了')
    let userName = sessionStorage.getItem('userName');
    let userId = sessionStorage.getItem('userId');
    const { id } = this.state;
    if(userName) {
      let param = {
        userId: userId,
        productId: id 
      }
      console.log(param)
      Api.post(`carts/add`, param, r => {
      })
    }else{
      alert('您还没有登录')
    }
  }

  render () {
    const { data } = this.state;
    return (
      <div>
        <Topbar></Topbar>
        <div className="detail-page">
          <div className="detail-block">
            <div className="detail-img">
              <img alt="产品图片" src={`http://localhost:3000/${data.thumb_url}`} style={{height: '100%',width: '100%'}}></img>
            </div>
            <div className="detail-info">
              <div className="detail-title">{data.title}</div>
              <div className="detail-content">{data.content}</div>
              <div className="detail-price">￥{data.price}</div>
              <div className="detail-num">库存数量{data.num}</div>
              <div className="btns">
                <Button type="primary"  onClick={this.addCart}><Icon type="shopping-cart" />加入购物车</Button>
              </div>
            </div>
          </div>
          <div className="detail-param">
            <img src={`http://localhost:3000/public/resources/imgs/detail.jpg`} ></img>
          </div>
        </div>
      </div>
    )
  }
}