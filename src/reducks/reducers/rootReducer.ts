import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../todos/slice'
import visibilityFilterSlice from '../filter/slice'
import userSlice from '../users/slice'


const rootReducer = combineReducers({
  todos: todoSlice,
  visibilityFilter: visibilityFilterSlice,
  user: userSlice
})


export default rootReducer