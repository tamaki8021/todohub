import { State, TodoItem } from './types'
import { RootState } from '../store/store'

export const getTodoList = (state: State): Array<string> =>
  state && state.todos ? state.todos.allIds : []

export const getTodoById = (state: State, id: string): TodoItem => {
  return { ...state.todos.byIds[id], id }
}

export const getTodos = (state: State): Array<TodoItem> => getTodoList(state).map((id) => getTodoById(state,id))