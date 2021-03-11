import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebase'
import { store } from '../store/store'

//todoの取得
export const fetchTodo = createAsyncThunk('todo/getAllTodos', async () => {
  const uid = store.getState().user.uid
  const TodosId: Array<string> = []

  const getTodos = await db.collection('users').doc(uid).collection('todos').get()
  getTodos.docs.forEach(snapshot => {
    const data = snapshot.data()
    const id = data.todoId
    TodosId.push(id)
  })
  const byTodo = getTodos.docs.map((doc) => ({
    contents: doc.data().contents,
    completed: doc.data().completed
    }))
  
  const passData = { TodosId, byTodo }
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