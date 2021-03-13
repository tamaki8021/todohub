import { createSlice, nanoid, PayloadAction, current } from "@reduxjs/toolkit"
import { TodoState, TodoItemState, TodoItem } from "./types"


const initialState: TodoState = {
  allIds: [],
  byIds: {}
}

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state = initialState , action: PayloadAction<{id: string, contents:string}>) => {
        const { id, contents } = action.payload

        const byId: TodoItemState = {contents,completed:false}

        state.allIds.push(id)
        state.byIds = {...state.byIds, [id]: byId}
      // },
      // prepare: (contents: string) => {
      //   const id = nanoid()
      //   return {payload: {id, contents}}
      // }
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
    },
    fetchTodos: (state, action) => {
      const {TodosId, byTodo} = action.payload
      console.log(action.payload);
      
      state.allIds = TodosId
      TodosId.forEach((id: string) => {
        byTodo.forEach((data: any) => {
          const todoId = data.id
          const { contents, completed} = data
          const newData = {contents, completed}

          if (id === todoId) {
            state.byIds[id] = newData
          }
          
          console.log(current(state.byIds));
        })
      })
      console.log(current(state));
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchTodo.fulfilled, (state, action) => {
  //     const {TodosId, byTodo} = action.payload
  //     console.log(current(state));
      
  //     state.allIds = TodosId

  //     TodosId.forEach((id: string) => {
  //       byTodo.forEach((data: any) => {
  //         state.byIds = {...state.byIds, [id]: data}
  //       })
  //     })
  //     console.log(current(state));
  //   })
  // }
})

export const { addTodo, toggleTodo, editTodo, fetchTodos } = todosSlice.actions

export default todosSlice.reducer
