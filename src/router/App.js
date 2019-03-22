import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SiteIndex from '@/page/site/index'
import Login from '@/page/site/login'
import Search from '@/page/site/search'
import Cart from '@/page/user/cart'
import Manager from '@/page/manager/index'
import Product from '@/page/manager/product'
import Order from '@/page/manager/order'

export default class App extends Component {
  render () {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path='/' component={SiteIndex} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/user/cart' component={Cart}/>
          <Route exact path='/manager' component={Manager}/>
          <Route exact path='/manager/product' component={Product}/>
          <Route exact path='/manager/order' component={Order}/>
        </Switch>
      </Router>
    )
  }
}