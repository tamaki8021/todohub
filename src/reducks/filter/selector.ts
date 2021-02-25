import { createSelector } from "@reduxjs/toolkit";
import { VISIBILITY_FILTERS } from "../../constants";
import { RootState } from "../store/store";
import { getTodos } from "../todos/selectors";
import { State } from "../todos/types";

const selectorTodos = (state: State) => state;
const selectorFilter = (state: State) => state.visibilityFilter;

const VisibilityFilter = VISIBILITY_FILTERS;

export const selectVisibleTodos = createSelector(
  [selectorTodos, selectorFilter],
  (state, filter) => {
    const allTodos = getTodos(state);
    switch (filter) {
      case VisibilityFilter.ALL:
        return allTodos;
      case VisibilityFilter.COMPLETED:
        return allTodos.filter((todo) => todo.completed);
      case VisibilityFilter.INCOMPLETE:
        return allTodos.filter((todo) => !todo.completed);
      default:
        throw new Error('Unknown filter:' + filter)
    }
  }
);
