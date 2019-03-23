import React, { Component } from 'react'
import Api from '@/tool/api.js'
import {Carousel, Card} from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import Topbar from '@/coms/topbar'
const { Meta } = Card;

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    Api.get('products/list', null, r => {
      console.log(r.data)
      this.setState({
        list: r.data.products
      })
    })
  }

  render () {
    let { list } = this.state;
    let dom = null;
    if(list.length !== 0){
      let listDom = list.map((i, k) => {
        return (
          <Link key={k} to={`/details/${i.id}`} style={{ width: '26%' ,margin: '10px 20px'}}>
            <Card
              hoverable
              cover={<img alt="example" src={`http://localhost:3000/${i.thumb_url}`} style={{ height: 200}}/>}       
            >
              <Meta
                title={i.title}
                description={`￥${i.price}`}
              />
            </Card>
          </Link>
        
          )
    })
    dom = (
      <div className='product'>
        {listDom}
      </div>
    )
    }
    return (
      <div>
        <Topbar></Topbar>
        {/* <Carousel autoplay className="carousel">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel> */}
        {dom}
      </div>
    )
  }
}