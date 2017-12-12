<<<<<<< HEAD
import { compose, createStore, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
=======
import { createStore, applyMiddleware, compose } from 'redux'
>>>>>>> Add location in state tree
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
