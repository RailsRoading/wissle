import { combineReducers } from 'redux'

import AppReducer from './AppReducer'
import UserReducer from './UserReducer'

const RootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer
});

export default RootReducer
