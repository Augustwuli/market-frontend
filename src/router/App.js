import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SiteIndex from '@/page/site/index'
import Login from '@/page/site/login'
import Search from '@/page/site/search'
import Cart from '@/page/user/cart'

export default class App extends Component {
  render () {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path='/' component={SiteIndex} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/user/cart' component={Cart}/>
        </Switch>
      </Router>
    )
  }
}