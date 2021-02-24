import { State, TodoItem } from './types'
import { RootState } from '../store/store'

export const getTodoList = (state: State): Array<string> =>
  state && state.todos ? state.todos.allIds : []

export const getTodoById = (state: RootState, id: string): TodoItem => {
  return { ...state.todo.todos.byIds[id], id }
}

export const getTodos = (state: RootState): Array<TodoItem> => getTodoList(state.todo).map((id) => getTodoById(state,id))