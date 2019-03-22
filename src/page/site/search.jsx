import React, { Component } from 'react'
import {Card} from 'antd'
import 'antd/dist/antd.css'
import Topbar from '@/coms/topbar'
const { Meta } = Card;

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Topbar></Topbar>
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