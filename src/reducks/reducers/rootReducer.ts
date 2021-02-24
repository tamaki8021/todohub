import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../todos/slice'
import visibilityFilterSlice from '../filter/Slice'


const rootReducer = combineReducers({
  todos: todoSlice,
  visibilityFilter: visibilityFilterSlice
})


export default rootReducer