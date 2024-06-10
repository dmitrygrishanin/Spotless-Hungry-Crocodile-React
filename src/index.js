import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Legacy from './views/legacy'
import Stat from './views/stat'
import Page from './views/page'
import NotFound1, { NotFound } from './views/not-found'
import Home from './views/home'
import SignIn from './views/sign-in'
import SignUp from './views/sign-up'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Legacy} exact path="/legacy" />
        <Route component={Stat} exact path="/stat" />
        <Route component={Page} exact path="/page" />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
