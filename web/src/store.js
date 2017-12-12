import { compose, createStore, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import RootReducer from 'reducers/RootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  RootReducer,
  composeEnhancers(
    persistState(['user']),
    applyMiddleware(thunk),
  ),
)
