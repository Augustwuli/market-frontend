import React, { Component } from 'react'
import Api from '@/tool/api.js'
import {Menu, Input, Carousel, Card} from 'antd'
import 'antd/dist/antd.css'
import Topbar from '@/coms/topbar'
const { Meta } = Card;

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      current: '',
    }
  }

  componentDidMount () {
    Api.get('topics', null, r => {
      console.log(r)
    })
  }

  handleClick = (e) => {
    console.log('click ', e);
    // this.setState({
    //   current: e.key,
    // });
  }

  render () {
    return (
      <div>
        <Topbar></Topbar>
        <Carousel autoplay className="carousel">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div className="product">
          <Card
            hoverable
            style={{ width: '30%'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}       
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: '30%'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
          <Card
            hoverable
            style={{ width: '30%'}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
        </div>
      </div>
    )
  }
}