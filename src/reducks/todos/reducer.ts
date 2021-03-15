import { createReducer } from "@reduxjs/toolkit"
import * as actions from "./actions"
import { TodoState } from "./types"

const initialState: TodoState = {
  allIds: [],
  byIds: {},
}

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addTodo, (state, action) => {
      const { id, contents } = action.payload
      state.allIds.push(id)
      state.byIds[id] = {contents, completed: false, evaluation: 0}
    })
    .addCase(actions.toggleTodo, (state,action) => {
      const { id } = action.payload
      const todo = state.byIds[id] 
      todo.completed = !todo.completed
    })
})