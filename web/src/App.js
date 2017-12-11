import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'typeface-berkshire-swash'

import store from 'store'

import './App.css'
import './index.css'

import Framework from 'components/pages/Framework'
import Home from 'components/pages/Home'

import User from 'components/pages/User/User'

import TermsOfService from 'components/pages/TermsOfService'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Framework>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={User} />

              <Route exact path="/tos" component={TermsOfService} />
            </Switch>
          </Framework>
        </BrowserRouter>
      </Provider>
    )
  }
}
