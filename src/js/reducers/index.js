import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import testfetch from './testfetch'

export default combineReducers({
  todos,
  visibilityFilter,
  testfetch
})
