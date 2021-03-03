import { VisibilityFilterTypes } from '../filter/types'

// todos
export interface TodoState {
  allIds: Array<string>;
  byIds: { [id: string] : TodoItemState}
};
export interface TodoItemState {
  contents: string;
  completed: boolean;
} 

export interface TodoItem {
  contents: string;
  completed: boolean;
  id: string
}

//state
export interface State {
  visibilityFilter: VisibilityFilterTypes;
  todos: TodoState
}