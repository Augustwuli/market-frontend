import React, { Component } from 'react'
import {Card} from 'antd'
import 'antd/dist/antd.css'
import Topbar from '@/coms/topbar'
import Api from '@/tool/api.js'
import { Link } from 'react-router-dom'
const { Meta } = Card;

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: this.props.location.state.keyword,
      list: []
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    let {keyword} = this.state
    Api.get(`products/search/${keyword}`, null, r => {
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
          <Link key={k} to={`/details/${i.id}`} style={{ width: '30%' ,margin: '10px 3%'}}>
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
        {dom}
      </div>
    )
  }
}