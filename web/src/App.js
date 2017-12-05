import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from 'store'

import './App.css'
import './index.css'

import Framework from 'components/pages/Framework'
import Home from 'components/pages/Home'

import Details from 'components/pages/profile/Details'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Framework>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/details" component={Details} />
            </Switch>
          </Framework>
        </BrowserRouter>
      </Provider>
    )
  }
}
