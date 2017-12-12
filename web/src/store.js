import { compose, createStore, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import RootReducer from 'reducers/RootReducer'

export default createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
    persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)
