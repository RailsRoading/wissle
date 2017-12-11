import { combineReducers } from 'redux'

import AppReducer from './AppReducer'
import UserReducer from './UserReducer'
import WissleReducer from './WissleReducer';

const RootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  wissle: WissleReducer
});

export default RootReducer
