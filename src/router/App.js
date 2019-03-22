import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SiteIndex from '@/page/site/index'
import Login from '@/page/site/login'

export default class App extends Component {
  render () {
    return (
      <Router basename="/">
        <Switch>
          <Route exact path='/' component={SiteIndex} />
          <Route exact path='/login' component={Login}/>
        </Switch>
      </Router>
    )
  }
}