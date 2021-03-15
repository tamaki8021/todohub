import { VisibilityFilterTypes } from '../filter/types'

// todos
export interface TodoState {
  allIds: Array<string>;
  byIds: { [id: string] : TodoItemState};
};
export interface TodoItemState {
  contents: string;
  completed: boolean;
  evaluation: number
} 

export interface TodoItem {
  contents: string;
  completed: boolean;
  id: string;
  evaluation: number
}

//state
export interface State {
  visibilityFilter: VisibilityFilterTypes;
  todos: TodoState
}