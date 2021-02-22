import { VISIBILITY_FILTERS } from '../../constants'

export type VisibilityFilterTypes = typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS]

// todos
export type TodoState = {
  allIds: Array<string>;
  byIds: { [id: string] : TodoItemState}
};
export type TodoItemState = {
  contents: string;
  completed: boolean;
} 

//state
export type State = {
  visibilityFilter: VisibilityFilterTypes;
  todos: TodoState
}