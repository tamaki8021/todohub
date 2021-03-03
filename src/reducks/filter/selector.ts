import { VISIBILITY_FILTERS } from "../../constants";
import { getTodos } from "../todos/selectors";
import { State } from "../todos/types";
import { VisibilityFilterTypes } from './types'
import { TodoItem } from "../todos/types";

const VisibilityFilter = VISIBILITY_FILTERS;

export const selectVisibleTodos = (
  state: State,
  filter: VisibilityFilterTypes
): TodoItem[] => {
  const allTodos = getTodos(state);
  switch (filter) {
    case VisibilityFilter.ALL:
      return allTodos;
    case VisibilityFilter.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case VisibilityFilter.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    default:
      throw new Error("Unknown filter:" + filter);
  }
};
