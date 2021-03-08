import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Home, SignUp, SignIn, Reset, Todo, Userpage } from './pages'
import Auth from './Auth'

const Router = () => {
  return (
      <Switch>
        <Route exact path="(/)?" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signin/reset" component={Reset} />
        <Auth>
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/todo/mypage" component={Userpage} />
        </Auth>
      </Switch>
  )
}

export default Router
