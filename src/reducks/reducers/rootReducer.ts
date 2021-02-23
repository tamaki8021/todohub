import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from '../todos/slice'
import visibilityFilter from '../filter/Slice'

const rootReducer = combineReducers({
  todos: todoSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer