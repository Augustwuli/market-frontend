import React, { Component } from 'react'
import 'antd/dist/antd.css'
import Topbar from '@/coms/topbar'

export default class Topbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Topbar></Topbar>
      </div>
    )
  }
}