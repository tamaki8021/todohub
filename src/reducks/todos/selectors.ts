import { State } from './types'

export type TodoItem = {
  contents: string;
  completed: boolean;
  id: string
}

export const getTodoList = (store: State): Array<string> =>
  store && store.todos ? store.todos.allIds : []

export const getTodoById = (store: State, id: string): TodoItem => {
  return { ...store.todos.byIds[id], id }
}

export const getTodos = (store: State): Array<TodoItem> => getTodoList(store).map((id) => getTodoById(store,id))