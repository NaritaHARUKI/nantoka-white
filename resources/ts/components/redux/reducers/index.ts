import { combineReducers } from 'redux'
import userData from './user'
import cssData from './css'

const rootReducer = combineReducers({
  user: userData,
  css: cssData,
})

export default rootReducer