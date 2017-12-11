import { combineReducers } from 'redux'

import AppReducer from 'reducers/AppReducer'
import UserReducer from 'reducers/UserReducer'
import TagReducer from 'reducers/TagReducer'

const RootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  tag: TagReducer,
})

export default RootReducer
