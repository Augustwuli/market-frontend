import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Topbar from '@/coms/topbar'

export default class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
  }

  render () {
    return (
      <div>
        <Topbar></Topbar>
        <div className="detail-page"></div>
      </div>
    )
  }
}