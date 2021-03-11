import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { TodoState, TodoItemState, TodoItem } from "./types"
import { fetchTodo } from './operations'


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
        const { id, contents } = action.payload

        const byId: TodoItemState = {contents,completed:false}

        state.allIds = [...state.allIds, id]
        state.byIds = {...state.byIds, [id]: byId}
      },
      prepare: (contents: string) => {
        const id = nanoid()
        return {payload: {id, contents}}
      }
    },
    toggleTodo: (state: TodoState, action: PayloadAction<{id: string}>) => {
      const byIds = state.byIds

      const todo = state.allIds.find((todo) => todo === action.payload.id)
      if (todo) {
        byIds[todo].completed = !byIds[todo].completed
      }
    },
    editTodo: (state: TodoState, action: PayloadAction<TodoItem>) => {
      const byIds = state.byIds
      const { id, contents, completed } = action.payload
      
      const todoId = state.allIds.find((todo) => todo === id)

      if (todoId) {
        const editData = state.allIds.map(data => data === id ? {contents, completed} : state.byIds.todoId)

        byIds[todoId] = editData[0]
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      const {TodosId, byTodo} = action.payload

      state.allIds = action.payload.TodosId
      TodosId.forEach(id => {
        byTodo.forEach(data => {
          state.byIds = {...state.byIds, [id]: data}
        })
      })
    })
  }
})

export const { addTodo, toggleTodo, editTodo } = todosSlice.actions

export default todosSlice.reducer
