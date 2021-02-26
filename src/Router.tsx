import React from 'react'
import { Route, Switch } from 'react-router'
import {Home, SignUp, Todo } from './pages/index'

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/login" component={SignUp} />
      <Route exact path="/todo" component={Todo} />
    </Switch>
  )
}

export default Router
