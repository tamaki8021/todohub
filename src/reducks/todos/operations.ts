import { db } from '../../firebase'
import { store } from '../store/store'
import { fetchTodos, addTodo, editTodo } from './slice'
import { AppDispatch } from '../store/store'
import { TodoItem } from './types'

// Todoの取得
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

//todoの変更
export const changeTodo = (newTodo: TodoItem) => {
  return async (dispatch: AppDispatch) => {
    const uid = store.getState().user.uid;
    const id = newTodo.id
    await db.collection('users').doc(uid).collection('todos').doc(id).update(newTodo)
      .then(() => {
        dispatch(editTodo(newTodo))
      }).catch((error) => {
        console.error('Error writing document: ' + error)
      })
  }
}