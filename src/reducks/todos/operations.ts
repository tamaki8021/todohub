import { createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebase'
import { store } from '../store/store'
import { fetchTodos, addTodo } from './slice'
import { AppDispatch } from '../store/store'

//todoの取得
// export const fetchTodo = createAsyncThunk('todo/getAllTodos', async () => {
//   const uid = store.getState().user.uid
//   const TodosId: Array<string> = []

//   const getTodos = await db.collection('users').doc(uid).collection('todos').get()
//   getTodos.docs.forEach(snapshot => {
//     const data = snapshot.data()
//     const id = data.todoId
//     TodosId.push(id)
//   })
//   const byTodo = getTodos.docs.map((doc) => ({
//     contents: doc.data().contents,
//     completed: doc.data().completed
//     }))
  
//   const passData = { TodosId, byTodo }
//   return passData
// })

export const fetchTodo = () => {
  return async (dispatch: AppDispatch) => {
    const uid = store.getState().user.uid;
    const TodosId: Array<string> = [];

    const getTodos = await db
      .collection("users")
      .doc(uid)
      .collection("todos")
      .get();
    getTodos.docs.forEach((snapshot) => {
      const data = snapshot.data();
      const id = data.id;
      TodosId.push(id);
    });
    const byTodo = getTodos.docs.map((doc) => ({
      id: doc.data().id,
      contents: doc.data().contents,
      completed: doc.data().completed,
    }));

    const passData = { TodosId, byTodo }
    dispatch(fetchTodos(passData))
  }
};

//todoの作成
export const createTodo = (todoData: any) => {
  return async (dispatch: AppDispatch) => {
    const uid = store.getState().user.uid
    const contents = todoData.contents
    const todoRef = db.collection("users").doc(uid).collection('todos').doc()
    const id = todoRef.id
    todoData['id'] = id
    await todoRef.set(todoData).catch((err) => console.error('Error writing document:' ,err)
    )
    dispatch(addTodo({id, contents}))
  }
}