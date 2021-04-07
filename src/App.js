import React from 'react';
import 'App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import SignUp from 'pages/SignUp/SignUp'
import AccountPage from 'pages/AccountPage/AccountPage'
import QualifyingSteps from 'pages/QualifyingSteps/QualifyingSteps'
import Products from 'pages/Products/Products'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/qualifying-steps">
            <QualifyingSteps />
          </Route>
          <Route path="/account-page">
            <AccountPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
