import { combineReducers } from 'redux'

import AppReducer from 'reducers/AppReducer'
import UserReducer from 'reducers/UserReducer'
import TagReducer from 'reducers/TagReducer'
import WissleReducer from 'reducers/WissleReducer'

const RootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  tag: TagReducer,
  wissle: WissleReducer,
})

export default RootReducer
