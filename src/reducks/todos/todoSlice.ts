import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { TodoState, TodoItemState } from "./types"


const initialState: TodoState = {
  allIds: [],
  byIds: {}
}

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state = initialState , action: PayloadAction<{id: string, contents:string}>) => {
        const id = action.payload.id
        const contents = action.payload.contents

        const byId: TodoItemState = {contents,completed:false}

        state.allIds.push(id)
        state.byIds[id] = byId
      },
      prepare: (contents: string) => {
        const id = nanoid()
        return {payload: {id, contents}}
      }
    },
    toggleTodo: (state: TodoState, action: PayloadAction<{id: string}>) => {
      const byIds = state.byIds

      const todo = state.allIds.find((v) => v === action.payload.id)
      if (todo) {
        byIds[todo].completed = !byIds[todo].completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
