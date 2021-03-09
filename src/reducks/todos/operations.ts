import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebase'
import { store } from '../store/store'
import { TodoItem } from './types'

export const fetchTodo = createAsyncThunk('todo/getAllTodos', async () => {
  const uid = store.getState().user.uid
  const getTodos = await db.collection('users').doc(uid).collection('todos').get()
  const allTodos = getTodos.docs.map((doc) => ({
    id: doc.data().todoId, 
    contents: doc.data().contents,
    completed: doc.data().completed
  }))
  const TodoId = allTodos[0].id
  const passData = {allTodos, TodoId}
  return passData
})

//todoの作成
export const createTodo = (addTodo: any) => {
  return async () => {
    const uid = store.getState().user.uid
    const todoRef = db.collection("users").doc(uid).collection('todos').doc()
    addTodo['todoId'] = todoRef.id
    await todoRef.set(addTodo).catch((err) => console.error('Error writing document:' ,err)
    )
  }
}